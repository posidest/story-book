from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Book, db
from app.helpers import *
from app.forms import BookForm

book_routes = Blueprint('books', __name__)


@book_routes.route('/', methods=['POST'])
def publish_book():
    print('i am in the publish book post route!!!!!!!!!!!!!!')
    form = BookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if "cover" not in request.files:
            return{"errors": "please upload a cover image"}
        else:
            cover = request.files["cover"]
            if not allowed_file(cover.filename):
                return {"errors": "file type not permitted"}, 400

            cover.filename = get_unique_filename(cover.filename)

            cover = upload_file_to_s3(cover)
            if "url" not in cover:
                return cover, 400

            cover = cover["url"]
            book = Book(
                user_id=current_user.id,
                title=form.data['title'],
                description=form.data['description'],
                cover=cover,
                category_id=form.data['category_id']
            )
            db.session.add(book)
            db.session.commit()
            return book.to_dict()
    return {'errors': 'publishing failed.'}, 401
