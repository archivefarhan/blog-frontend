import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Bloggy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#posts-index">
                  All posts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#posts-new">
                  New Post
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#signup">
                  Signup
                </a>
              </li>

              <li class="nav-item">
                <LogoutLink />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
