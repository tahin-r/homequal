import { useWizard } from 'react-use-wizard';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const SummaryPause: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    Awesome!  The next step is to see if you will qualify for a $2,200 monthly mortgage payment.
                </Title>
                <Title level={4}>
                    To help make this decision, lenders will calculate your Debt to Income Ratio.
                </Title>
                <Title level={4}>
                    Let’s quickly calculate yours now.
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={() => nextStep()}
                        style={{ 
                            backgroundColor: '#ff1a8c',
                            color: '#fff', borderColor: '#000', borderRadius: '5px', marginTop: '20px' }}
                    >
                        Continue
                    </Button>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>

            </Col>
        </Row>
    )
}

export default SummaryPause;