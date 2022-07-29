export const NavItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    cName: "nav-item",
    sub: [
      {
        title: "Chart",
        path: "/dashboard/chart",
        cName: "dropdown-link",
      },
      { title: "Info", path: "/dashboard/info", cName: "dropdown-link" },
    ],
  },
  {
    id: 2,
    title: "Download",
    path: "download",
    cName: "nav-item",
    sub: [
      {
        title: "Products",
        path: "/download/products",
        cName: "dropdown-link",
      },
      {
        title: "Docs",
        path: "/download/docs",
        cName: "dropdown-link",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    path: "about",
    cName: "nav-item",
    sub: [
      {
        title: "Contact",
        path: "/about/contact",
        cName: "dropdown-link",
      },
      {
        title: "Author",
        path: "/about/author",
        cName: "dropdown-link",
      },
    ],
  },
  {
    id: 4,
    title: "Profile",
    path: "profile",
    cName: "nav-item",
    sub: [
      {
        title: "Login",
        path: "/profile/login",
        cName: "dropdown-link",
      },
      {
        title: "Register",
        path: "/profile/register",
        cName: "dropdown-link",
      },
    ],
  },
];
