import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const PaymentHistory: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    const [value, setValue] = useState(0)
    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    Lenders pay close attention to items on your report as well.
                </Title>
                <Title level={4}>
                    Check any that apply.
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Late payments in last 12 months</Radio>
                            <Radio value={1}>Collections in last 12 months</Radio>
                            <Radio value={2}>Late student loan payments</Radio>
                            <Radio value={3}>Late housing or lease payments</Radio>
                            <Radio value={4}>Any tax liens, judgements, or foreclosures in the past 4 years</Radio>
                            <Radio value={5}>Bankruptcy in the past 2 years</Radio>
                            <Radio value={6}>Not current on filing taxes</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Text italic>
                    By asking, we can customize your Success Plan to address any of these.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default PaymentHistory;