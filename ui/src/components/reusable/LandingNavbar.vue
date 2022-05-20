<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light m-0">
      <div class="container-fluid px-0">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Shops</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Hair</a></li>
                <li><a class="dropdown-item" href="#">Food</a></li>
                <li><a class="dropdown-item" href="#">Health</a></li>
                <li><a class="dropdown-item" href="#">Beauty</a></li>
                <li><a class="dropdown-item" href="#">Spa</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Near Me</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn" type="submit">
              <font-awesome-icon :icon="['fa', 'magnifying-glass']" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/landingPage.css";
</style>