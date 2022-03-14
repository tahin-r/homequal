import { useWizard } from 'react-use-wizard';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const CalculatingPause: React.FC = () => {
    const { handleStep, previousStep } = useWizard();
    const { Title } = Typography;

    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '40px' }}>
                <Title level={3} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    That’s it. Give me a second
                    to crunch some numbers.
                </Title>
                {/* options */}
                <div style={{ marginTop: '50px' }}>
                    <Title level={4} style={{ color: "#ff66cc" }} italic>
                        Analyzing Financial Data ………
                    </Title>
                    <br />
                    <Title level={4} style={{ color: "#ff66cc" }} italic>
                        Identifying Potential Issues ....
                    </Title>
                    <br />
                    <Title level={4} style={{ color: "#ff66cc" }} italic>
                        Calculating Cash Reward .…….
                    </Title>
                    <br />
                    <Title level={4} style={{ color: "#ff66cc" }} italic>
                        Building Success Plan …………
                    </Title>
                    <br />
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default CalculatingPause;