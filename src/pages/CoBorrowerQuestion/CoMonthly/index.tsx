import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const CoMonthly: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    OK, Now let's look at your expenses.
                    Enter your monthly payment for any that apply...
                </Title>
                <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
                    <Col xs={8}>Yours</Col>
                    <Col xs={8}>Jane's</Col>
                    <Col xs={8}></Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}>Auto Payments</Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}>Credit Cards</Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}>Student Loans</Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: '10px', marginBottom: '100px' }}>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}><Input placeholder="Payment" /></Col>
                    <Col xs={8}>Any Other</Col>
                </Row>

                <Text italic>
                    Don’t list expenses like utilities, mobile payments, insurance, etc.  Only those items on your credit report.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoMonthly;