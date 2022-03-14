import { Row, Col } from 'antd';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col style={{ padding: '30px' }}>
          {children}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Layout;
