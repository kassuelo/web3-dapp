"use client";
import { useState, useEffect } from "react";
import { doLogin } from "../services/Web3Service";
export default function Header() {
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem("wallet") || "");
  }, []);

  function btnLoginClick() {
    doLogin()
      .then((wallet) => setWallet(wallet))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            href="/"
            className="justify-content-start"
            style={{ textDecoration: "none" }}
          >
            <h1 className="fw-bold text-light">FloodHelp</h1>
          </a>
          <div className="ps-5 text-end col-lg-9">
            {!wallet ? (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={btnLoginClick}
              >
                <img src="/metamask.svg" width="24" className="me-3" /> Entrar
              </button>
            ) : (
              <a
                href="/create"
                className="btn btn-warning"
                style={{ textDecoration: "none" }}
              >
                Pedir ajuda
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
