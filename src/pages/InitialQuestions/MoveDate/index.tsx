import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space, Input } from 'antd';
import { Typography } from 'antd';

const MoveDate: React.FC = () => {
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
                    When would you like to be in your new home?
                </Title>
                <Input placeholder="Enter Date" />

                <Title level={4}>
                    or select an approximate date
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>1 – 3 Months</Radio>
                            <Radio value={1}>4 – 6 Months</Radio>
                            <Radio value={2}>7 – 9 Months</Radio>
                            <Radio value={3}>9 + Months</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Text italic style={{ marginTop: '20px' }}>
                    TIP:  If you are leasing now, you might want to enter your lease expiration date.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default MoveDate;