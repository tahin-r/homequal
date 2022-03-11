import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const MonthlyMortgagePayment: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    What is the maximum you want to spend monthly on your mortgage payment?
                </Title>
                <Input placeholder="Maximum Monthly Payment" />

                <Text italic style={{ marginTop: '20px' }}>
                    We may find that you qualify for more or less, and we will show you that later.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default MonthlyMortgagePayment;