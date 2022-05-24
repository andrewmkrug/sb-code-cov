import Home, { getServerSideProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args, { loaded: { name } }) => (
  <Home {...args} name={name} />
);
HomePage.args = {  };
HomePage.loaders = [
  async () => {
    let data = await getServerSideProps();

    return data.props;
  },
];
