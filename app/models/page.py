from .db import db


class Page(db.Model):
    __tablename__ = "pages"

    id = db.Column(db.Integer, primary_key=True)
    page_number = db.Column(db.Integer, nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(
        "books.id", ondelete="CASCADE"))
    page_pic = db.Column(db.Text)
    page_text = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'page_number': self.page_number,
            'book_id': self.book_id,
            'page_pic': self.page_pic,
            'page_text': self.page_text,
        }
