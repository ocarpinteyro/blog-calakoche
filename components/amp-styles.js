import css from 'styled-jsx/css'

export default css.global`
.h1, .h2, .h3, .h4, body {
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-weight: 300;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}

.main {
  position: relative;
}

.col-md-10 {
  position: relative;
  width: 100%;
  min-height: 1px;
}

.col-md-8 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.h1, h1 {
  font-size: 3.3125rem;
  line-height: 1.15em;
}

.h3, h3 {
  font-size: 1.5625rem;
  line-height: 1.4em;
}

.h4, h4 {
  font-size: 1.125rem;
  line-height: 1.5em;
  font-family: inherit;
  font-weight: 400;
}

.h5, h5 {
  font-size: 1.0625rem;
  line-height: 1.55em;
  margin-bottom: 15px;
  margin-top: 10px;
}

.h6, h6 {
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
    margin-bottom: 10px;
}

.navbar.bg-primary {
    color: #fff;
    background-color: #12151c;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 12px -5px rgba(55,39,39,.46);
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}.navbar {
  border: 0;
  padding: .625rem 0;
  margin-bottom: 20px;
  color: #555;
}.navbar-brand {
  background: url(/assets/img/calakoche_logo_header.png) 0 5px/100% no-repeat;
  display: block;
  height: 50px;
  width: 109px;
  text-indent: -9999px;
  overflow: hidden;
}

.card {
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}

.card .card-body {
  padding: .9375rem 1.875rem;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-background {
  background-position: center center;
  background-size: cover;
  text-align: center;
}

.card-background .card-body {
  position: relative;
  z-index: 2;
  min-height: 280px;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.card .card-category {
  margin-top: 10px;
}

.card-background .card-category, .card-background .card-description, .card-background small{
  color: rgba(255,255,255,.7);
}

.card-background .card-description-no-opacity {
  color: rgba(255,255,255,.9);
}

.card-image-source {
  font-size: .75rem;
}

.card-background .card-title {
  color: #fff;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 700;
    font-family: "Roboto Slab","Times New Roman",serif;
    margin-bottom: .75rem;
}

.card-background:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background-color: rgba(18,21,28,.56);
  border-radius: 6px;
}

.blog-post .section-text p {
  font-size: 1.188rem;
  line-height: 1.5em;
  color: #555;
  margin-bottom: 30px;
}

p {
  margin: 0 0 10px;
}

.text-center {
  text-align: center;
}

.card-blog {
  margin-top: 30px;
}

.card-plain {
  background: 0 0;
  box-shadow: none;
}

.card .card-header.card-header-image {
  position: relative;
  padding: 0;
  z-index: 1;
  border-radius: 6px;
}

.card-plain .card-header-image {
  margin: 0;
}

.card .card-header {
  border: 0;
  background: linear-gradient(60deg,#eee,#bdbdbd);
}

.card .card-header.card-header-image a {
  display: block;
}

.text-info {
  color: #00bcd4;
}

.card-title, .card-title a{
  color: #3c4858;
  text-decoration: none;
}

.card-title {
  font-weight: 700;
  font-family: "Roboto Slab","Times New Roman",serif;
      margin-bottom: .75rem;
}

.card-description {
  color: #555;
}

.card .card-title {
  margin-top: .625rem;
}

.card .card-header.card-header-image img {
  width: 100%;
  border-radius: 6px;
  pointer-events: none;
}

.card .card-header.card-header-image {
  box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
}

.btn.btn-primary {
  color: #fff;
  background-color: #12151c;
  border-color: #12151c;
  box-shadow: 0 2px 2px 0 rgba(55,39,39,.14), 0 3px 1px -2px rgba(55,39,39,.2), 0 1px 5px 0 rgba(55,39,39,.12);
}

.btn {
  display: inline-block;
  position: relative;
  padding: 12px 30px;
  margin: .3125rem 1px;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.42857;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn.btn-round {
  border-radius: 30px;
}

footer {
  padding: .9375rem 0;
  text-align: center;
  display: flex;
  background-color: #eee;
}

.float-left {
  float: left;
}

footer ul {
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-top: 0;
}

footer ul li {
  display: inline-block;
}

footer ul li a {
  color: inherit;
  padding: .9375rem;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  text-decoration: none;
  position: relative;
  display: block;
}

footer .copyright {
  padding: 15px 0;
}

.float-right {
  float: right;
}
`