function About() {
  return (
    <section id="about" className="container">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <img
            src="C:\Users\Ahmed\OneDrive\Desktop\macrame\hand-made\src\assets\images\About.jpg"
            alt="About the brand"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">What is macrame_by_mena?</h2>
          <p className="fs-5" style={{ color: 'var(--color-text)' }}>
            An Egyptian brand bringing the art of macrame to life in a modern, simple way.
            Every piece is knotted by hand, thread by thread — no machines, no repeats.
            Whether you want a plant hanger, a bag, or home decor, you can request a
            custom design that reflects your exact taste.
          </p>
          <p className="fs-5" style={{ color: 'var(--color-text)' }}>
            Every piece takes its time to reach you with the best quality and finish.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;