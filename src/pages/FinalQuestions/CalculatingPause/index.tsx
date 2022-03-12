import { useWizard } from 'react-use-wizard';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const CalculatingPause: React.FC = () => {
    const { handleStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    That’s it. Give me a second
                </Title>
                <Title level={4}>
                    to crunch some numbers.
                </Title>
                {/* options */}
                <Text style={{color:"#ff66cc"}} italic>
                    Analyzing Financial Data ………
                </Text>
                <br />
                <Text style={{color:"#ff66cc"}} italic>
                    Identifying Potential Issues ....
                </Text>
                <br />
                <Text style={{color:"#ff66cc"}} italic>
                    Calculating Cash Reward .…….
                </Text>
                <br />
                <Text style={{color:"#ff66cc"}} italic>
                    Building Success Plan …………
                </Text>
                <br />
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default CalculatingPause;