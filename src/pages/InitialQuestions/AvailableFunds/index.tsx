import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const AvailableFunds: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    How much money will you have available to purchase your new home?
                </Title>
                <Input placeholder="Enter Amount Available" />

                <Text italic style={{ marginTop: '20px' }}>
                    Tip:  Enter the amount you will have saved by the time you apply for a mortgage.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default AvailableFunds;