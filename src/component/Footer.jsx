import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
        <footer className="text-center text-lg-start mt-5 text-white bg-dark">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">

        <p>
        Pemerintah Provinsi Nusa Tenggara Timur<br/>Dinas Pariwisata dan Ekonomi Kreatif<br/>
        Jl. Frans Seda(El Tari III) No.72 Kayu Putih, Kec.Oebobo<br/>Kota Kupang - Nusa Tenggara Timur 85111<br/>
        Telpon/Fax : (0380) 826384<br/>
        Email : parekraf@nttprov.go.id
        </p>
      </div>

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Ikuti Kami Juga Di</h5>

        <a href={'https://www.facebook.com/'}>
            <svg
            width={'35px'}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 m-2"
            fill="currentColor"
            style={{ color: "#1877f2" }}
            viewBox="0 0 24 24"
            >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            </a>

        <a href={'htpps://www.instagram.com/'}>
            <svg
            width={'35px'}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 m-2"
            fill="currentColor"
            style={{ color: "#c13584" }}
            viewBox="0 0 24 24"
            >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            </a>

        <a href={'https://www.youtube.com/'}>
            <svg
            width={'35px'}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 m-2"
            fill="currentColor"
            style={{ color: "#ff0000" }}
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            </a>

        <a href={'https://www.twitter.com/'}>
            <svg
            width={'35px'}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 m-2"
            fill="currentColor"
            style={{ color: "#1da1f2" }}
            viewBox="0 0 24 24"
            >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
        </a>


        

        
      </div>
    </div>
  </div>


  <div className="text-center p-3">
    © 2023 Dinas Pariwisata dan Ekonomi Kreatif Provinsi Nusa Tenggara Timur
  </div>
</footer>
        </>
    )
}

export default Footer