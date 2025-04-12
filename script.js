 {
  box-sizing border-box;
  font-family Arial, sans-serif;
}

body {
  margin 0;
  background #f9f9f9;
  color #333;
}

header {
  background #2c3e50;
  color white;
  padding 1rem 2rem;
  display flex;
  justify-content space-between;
  align-items center;
}

header h1 {
  margin 0;
}

nav a {
  color white;
  margin-left 1rem;
  text-decoration none;
}

.hero {
  background #3498db;
  color white;
  text-align center;
  padding 4rem 1rem;
}

.hero .btn {
  background white;
  color #3498db;
  padding 0.5rem 1rem;
  border none;
  text-decoration none;
  font-weight bold;
}

section {
  padding 2rem;
  max-width 800px;
  margin auto;
}

form {
  display flex;
  flex-direction column;
}

form input, form textarea, form button {
  margin 0.5rem 0;
  padding 0.75rem;
  font-size 1rem;
}

form button {
  background #27ae60;
  color white;
  border none;
  cursor pointer;
}

footer {
  text-align center;
  background #2c3e50;
  color white;
  padding 1rem;
}
