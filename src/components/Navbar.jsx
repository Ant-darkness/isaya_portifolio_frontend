import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Qualifications", path: "/qualifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ profile = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
            {profile.image ? (
              <img src={profile.image} alt="profile" className="nav-avatar" />
            ) : (
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(233,30,140,0.15)",
                  border: "2px solid rgba(233,30,140,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  color: "var(--pink-soft)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {(profile.name || "IM")[0]}
              </div>
            )}
            <div>
              <div className="nav-name">{profile.name || "ISAYA MKUMBO"}</div>
              <div className="nav-sub">Data Science Student</div>
            </div>
          </NavLink>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span
              style={{
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
