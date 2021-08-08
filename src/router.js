import Home from "./Components/Page/home/home";
import CartShop from "./Components/Page/cartShop/cartShop";
import Admin from "./Components/Page/admin/admin";
import AdminCart from "./Components/Page/admin/adminCart";
import AdminBanner from "./Components/Page/admin/adminBanner/adminBanner";
import News from "./Components/Page/news/news";
import Login from "./Components/Page/login/login";
import UserCart from "./Components/Page/user/traCuuDonHang";
import UserPrintPDF from "./Components/Page/user/userPrintPDF";
import ProductAll from "./Components/Page/productAll/productAll";
import ProductSelect from "./Components/Page/productSelect/productSelect";
import { Redirect } from "react-router-dom";

const route = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/cartshop",
    exact: true,
    main: ({ history, match }) => <CartShop history={history} match={match} />,
  },
  {
    path: "/admin",
    exact: true,
    main: ({ history, match }) => <Admin history={history} match={match} />,
  },
  {
    path: "/news/:id/news",
    exact: true,
    main: ({ history, match }) => <News history={history} match={match} />,
  },
  {
    path: "/login",
    exact: true,
    main: ({ history, match }) => <Login history={history} match={match} />,
  },
  {
    path: "/adminCart",
    exact: true,
    main: ({ history, match }) => <AdminCart history={history} match={match} />,
  },
  {
    path: "/adminBanner",
    exact: true,
    main: ({ history, match }) => (
      <AdminBanner history={history} match={match} />
    ),
  },
  {
    path: "/tra-cuu-don-hang",
    exact: true,
    main: ({ history, match }) => <UserCart history={history} match={match} />,
  },
  {
    path: "/in-hoa-don-mua-hang",
    exact: true,
    main: ({ history, match }) => (
      <UserPrintPDF history={history} match={match} />
    ),
  },
  {
    path: "/tat-ca-san-pham/:id",
    exact: true,
    main: ({ history, match }) => (
      <ProductAll history={history} match={match} />
    ),
  },
  {
    path: "/select/:id/select",
    exact: true,
    main: ({ history, match }) => (
      <ProductSelect history={history} match={match} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <Redirect to="/" />,
  },
];
export default route;
