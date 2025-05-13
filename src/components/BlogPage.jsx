import React from "react";
import { motion } from "framer-motion";
import blog from "../assets/blog.png";
import "../style/blog.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1, y: 0, transition: { 
      delay: i * 0.2, duration: 0.6, ease: "easeOut"
    }
  })
};

const BlogPage = () => {
  return (
    <motion.div
      className="container my-5" initial="hidden" animate="visible" variants={fadeIn}
    >
      <div className="row">
        {/* Main Content */}
        <motion.div className="col-lg-8" custom={1} variants={fadeIn}>
          <h1 className="fw-bold mb-3 blog-title"> Best LearnPress WordPress Theme Collection For 2025 </h1>

          <motion.img src={blog} alt="EDUMA" className="img-fluid rounded mb-4" />

          <p className="blog-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus in possimus itaque ut ipsum natus officiis dolore ea minima eligendi nemo suscipit quae, deserunt laboriosam sunt maxime rem delectus?
            Consequuntur similique quisquam aperiam voluptate expedita debitis sed exercitationem ea. Inventore beatae ratione incidunt quaerat excepturi veritatis culpa quas modi fugiat nisi, earum ducimus? Esse omnis obcaecati facilis asperiores ipsam.
            Dicta tempora vitae sunt ratione earum, doloribus at. Eum illo laboriosam possimus necessitatibus dolore, a obcaecati repellendus id non eligendi quis aut doloribus praesentium quae ut reiciendis facilis labore voluptatem?
            Vitae fuga ea atque provident modi corporis amet error, numquam reiciendis odio ex laboriosam distinctio assumenda optio beatae ipsam nulla perferendis eum. Nisi ea a fugit iure quo provident culpa.
            Cum placeat fugiat dolorum quia quam recusandae, nisi iure modi quisquam quo ipsa dolore, corporis sint nostrum sunt odio possimus deserunt, pariatur veniam neque saepe. Illo aspernatur fuga reiciendis facere.
            Similique excepturi assumenda consequatur voluptatum molestiae illum alias ab minus odio eaque quo nam non sunt nostrum, voluptate nisi ipsam deleniti nobis soluta! Facilis vitae praesentium odio voluptates incidunt animi.
            Quia, corporis libero? Beatae animi, harum fuga, doloribus, ratione veritatis illum voluptate reiciendis accusamus numquam aspernatur a quo delectus explicabo suscipit nemo ex voluptates voluptas deleniti officia ut maiores possimus!
            Ut, reprehenderit explicabo iusto quam asperiores unde quos veniam ullam, iste, commodi eos soluta. Dolorum corrupti numquam ab accusamus non sed? Facilis tempore sequi, doloribus aliquam voluptatibus odit quos ab?
            Quidem aspernatur molestiae ullam rerum officia? Amet dolorem labore autem. Suscipit excepturi iusto magni voluptatum minus, culpa sapiente, voluptas ipsa nobis totam neque laudantium perferendis non, distinctio fugit aspernatur? Dolore.
            Libero sunt pariatur et assumenda. Error dicta reiciendis officiis placeat? Ad ipsum quasi quam? Commodi ipsam minima non provident similique sed quibusdam optio culpa, unde accusantium numquam sapiente tempore dolorem!
          </p>

          {/* Tags */}
          <div className="border-top pt-3 mt-4 d-flex justify-content-between flex-wrap">
            <div> <strong>Tags:</strong>{" "}
              {["Free Courses", "Marketing", "LMS", "LearnPress", "Instructor"].map((tag, index) => (
                <span key={index} className="badge text-bg-secondary mx-1">{tag}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-5 border-top pt-4 nav-article">
            <div>
              <div className="text-muted small">Prev Article</div>
              <h6 className="mb-0">Best LearnPress WordPress Theme Collection For 2022</h6>
            </div>
            <div className="text-end">
              <div className="text-muted small">Next Article</div>
              <h6 className="mb-0">Best LearnPress WordPress Theme Collection For 2024</h6>
            </div>
          </div>

          {/* Comments */}
          <motion.div className="mt-5" custom={2} variants={fadeIn}>
            <h4>20 Comments</h4>

            {[1, 2].map((_, idx) => (
              <motion.div
                key={idx}
                className="mb-3 p-3 border rounded comment-box"
                whileHover={{ scale: 1.01 }}
              >
                <strong>Laura Harper</strong>{" "}
                <span className="text-muted small">— October 0{5 + idx}, 2022</span>
                <p className="mb-1">Vivamus fringilla justo dui, porttitor maximus convallis lorem...</p>
                <button className="btn btn-link p-0">Reply</button>
              </motion.div>
            ))}

            <nav>
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><span className="page-link">2</span></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </motion.div>

          {/* Comment Form */}
          <motion.div className="mt-5" custom={3} variants={fadeIn}>
            <h5>Leave A Comment</h5>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Name *" required />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <input type="email" className="form-control" placeholder="Email *" required />
                </div>
              </div>

              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Comment *" required></textarea>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Save my name, email in this browser for the next time I comment
                </label>
              </div>

              <button type="submit" className="btn btn-warning g-clr">Post Comment</button>
            </form>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div className="col-lg-4 sidebar" custom={2} variants={fadeIn}>
          <div className="mb-4">
            <h5>Category</h5>
            <ul className="list-group list-group-flush">
              {["Commercial", "Education", "Finance", "Academy", "Single Family", "Office"].map((cat, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {cat}
                  <span className="badge bg-secondary rounded-pill">{Math.floor(Math.random() * 10 + 1)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h5>Recent Posts</h5>
            <ul className="list-unstyled">
              {["Best LearnPress WordPress Theme Collection For 2025", "Best Free LMS Plugin", "Top Free WordPress Themes"].map((title, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-decoration-none text-dark">
                    <small>📌 {title}</small>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Tags</h5>
            <div className="d-flex flex-wrap gap-2">
              {["Free", "Courses", "Marketing", "LMS", "LearnPress", "Instructor"].map((tag, idx) => (
                <span key={idx} className="badge text-bg-light border">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
