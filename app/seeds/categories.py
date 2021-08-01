from app.models import db, category


def seed_categories():
    family = Category(name='Family', description="Stories about family")
    dinosaurs = Category(
        name='Dinosaurs', description="Stories about dinosaurs")
    animals = Category(name='Animals, description="Stories about animals')
    biography = Category(
        name="Biography", description="Stories about a specific person")
    adventure = Category(
        name="Adventure", description="Stories about epic adventures")
    growing_up = Category(
        name="Growing Up", description="Coming of age stories")
    history = Category(name="History", description="Stories about the past")
    science = Category(
        name="Science", description="Stories about cool science things")
    db.session.add(family)
    db.session.add(dinosaurs)
    db.session.add(animals)
    db.session.add(biography)
    db.session.add(adventure)
    db.session.add(growing_up)
    db.session.add(history)
    db.session.add(science)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()
