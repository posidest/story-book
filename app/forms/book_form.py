from flask_wtf import FlaskForm
from wtforms import StringField, FileField, TextAreaField, SelectField, IntegerField
from wtforms.validators import DataRequired
from app.models import Book


class BookForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    cover = FileField('cover image', validators=[DataRequired()])
    description = TextAreaField('description')
    category_id = IntegerField('category')
    user_id = IntegerField('user_id')
