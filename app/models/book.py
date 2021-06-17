from .db import db
from sqlalchemy.dialects import postgresql


class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        "categories.id"))

    keywords = db.Column(postgresql.ARRAY(db.String(30)))
    cover = db.Column(db.Text)
    description = db.Column(db.Text)

    pages = db.relationship("Page")
    comments = db.relationship("Comment")

# views = db.relationship("View")
    favorites = db.relationship("Favorite")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "keywords": self.keywords,
            "cover": self.cover,
            "description": self.description,
            "pages": [page.to_dict() for page in self.pages],
            "comments": [comment.to_dict() for comment in self.comments],
            "favorites": [favorite.to_dict() for favorite in self.favorites]
        }
