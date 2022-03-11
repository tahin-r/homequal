import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const CoMonthlyIncome: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    What is your total monthly income from all sources before any taxes or deductions?
                </Title>
                <Input placeholder="Enter Total Monthly Income" />
                <Title level={4}>
                    What is Jane's total monthly income from all sources before any taxes or deductions?
                </Title>
                <Input placeholder="Enter Total Monthly Income" />
                <Text italic>
                    Enter the GROSS in come, not the amountg taken home.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoMonthlyIncome;