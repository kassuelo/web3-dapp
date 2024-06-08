"use client";
export default function Footer() {
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center border-top p-3 m-5">
      <p
        className={
          "col-md-6 col-sm-12 mb-0 text-body-secondary " +
          (mobile ? "text-center" : "")
        }
      >
        &copy; 2024 FloodHelp, Inc.
      </p>
      <ul
        className={
          "nav col-md-6 col-sm-12 justify-content-" +
          (mobile ? "center" : "end")
        }
      >
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">
            Ajudar
          </a>
        </li>
        <li className="nav-item">
          <a href="/create" className="nav-link px-4 text-body-secondary">
            Pedir Ajudar
          </a>
        </li>
      </ul>
    </footer>
  );
}
