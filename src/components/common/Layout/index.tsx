
interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div >
      <div >{children}</div>
    </div>
  );
};

export default Layout;
