from .db import db


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"))

    user = db.relationship("User")

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user': self.user.to_dict(),
            'book_id': self.book_id,
        }
