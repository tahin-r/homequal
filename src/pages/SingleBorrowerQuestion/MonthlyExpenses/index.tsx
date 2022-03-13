import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const MonthlyExpenses: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    OK. Now let’s look at your expenses. Enter your monthly payment for any that apply...
                </Title>
                <div style={{ marginTop: '30px', marginBottom: '50px' }}>
                    <Row gutter={[16, 16]} style={{ marginBottom: '10px' }}>
                        <Col xs={8}>
                            <Input placeholder="Payment" style={{ backgroundColor: '#e6e6e6', color: '#000' }} />
                        </Col>
                        <Col xs={16}>
                            <Text style={{ verticalAlign: '-webkit-baseline-middle' }}>Auto Payments </Text>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '10px' }}>
                        <Col xs={8}>
                            <Input placeholder="Payment" style={{ backgroundColor: '#e6e6e6', color: '#000' }} />
                        </Col>
                        <Col xs={16}>
                            <Text style={{ verticalAlign: '-webkit-baseline-middle' }}>Credit Cards</Text>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '10px' }}>
                        <Col xs={8}>
                            <Input placeholder="Payment" style={{ backgroundColor: '#e6e6e6', color: '#000' }} />
                        </Col>
                        <Col xs={16}>
                            <Text style={{ verticalAlign: '-webkit-baseline-middle' }}>Student Loans </Text>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginBottom: '10px' }}>
                        <Col xs={8}>
                            <Input placeholder="Payment" style={{ backgroundColor: '#e6e6e6', color: '#000' }} />
                        </Col>
                        <Col xs={16}>
                            <Text style={{ verticalAlign: '-webkit-baseline-middle' }}>Any Other </Text>
                        </Col>
                    </Row>
                </div>
                <Text italic>
                    Don’t list expenses like utilities, mobile payments, insurance, etc.  Only those items on your credit report.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default MonthlyExpenses;