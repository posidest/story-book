"""added favorites and comments and relationships

Revision ID: 7ce686e1fcc7
Revises: 29ecfbb78064
Create Date: 2021-06-16 20:08:04.011790

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7ce686e1fcc7'
down_revision = '29ecfbb78064'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('book_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('book_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('books', sa.Column('category_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'books', 'categories', ['category_id'], ['id'])
    op.add_column('pages', sa.Column('book_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'pages', 'books', ['book_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'pages', type_='foreignkey')
    op.drop_column('pages', 'book_id')
    op.drop_constraint(None, 'books', type_='foreignkey')
    op.drop_column('books', 'category_id')
    op.drop_table('favorites')
    op.drop_table('comments')
    # ### end Alembic commands ###