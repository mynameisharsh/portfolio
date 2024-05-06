import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loading from "../components/Loading";
import { Fox } from "../models/Fox";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          email_from: formValue.email,
          email_to: "chaudharyharsh1998@gmail.com",
          name_from: formValue.name,
          name_to: "Harsh Chaudhary",
          message: formValue.comment,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setFormValue({ comment: "", email: "", name: "" });
        setCurrentAnimation("idle");
      })
      .catch(() => {
        setLoading(false);
        setCurrentAnimation("idle");
      });
  };

  return (
    <section className="relative max-container flex lg:flex-row flex-col">
      <div className="min-w-[50%] flex-1 flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="flex flex-1 flex-col w-full gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-lg font-bold text-black">
            Name
            <input
              className="input"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              value={formValue.name}
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-lg font-bold text-black">
            Email
            <input
              className="input"
              name="email"
              type="email"
              required
              placeholder="johndoe@email.com"
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-lg font-bold text-black">
            Comment
            <textarea
              className="input"
              name="comment"
              required
              placeholder="Let me know how I can help you."
              rows={4}
              value={formValue.comment}
              onChange={(e) =>
                setFormValue({ ...formValue, comment: e.target.value })
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button className="btn" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ far: 1000, near: 0.1, position: [0, 0, 5] }}>
          <Suspense fallback={<Loading />}>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={0.5} />
            <Fox
              currentAnimation={currentAnimation}
              scale={[0.5, 0.5, 0.5]}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
