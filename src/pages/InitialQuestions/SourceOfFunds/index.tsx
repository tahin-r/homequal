import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const SourceOfFunds: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;
    const [value, setValue] = useState(0)

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{padding: '30px'}}>
                <Title level={4}>
                    What is the source of your $12,000 funds? Check any that apply.
                </Title>
                <div style={{ textAlign: 'center', marginTop:'20px', marginBottom:'20px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Checking / Savings</Radio>
                            <Radio value={1}>401K</Radio>
                            <Radio value={2}>Stocks / Crypto</Radio>
                            <Radio value={3}>Gift Funds</Radio>
                            <Radio value={4}>Other</Radio>
                        </Space>
                    </Radio.Group>
                </div>

                <Text italic style={{ marginTop: '20px' }}>
                    Tip: When starting the mortgage process, be careful moving money in and out of accounts or having any large deposits.  Lenders will ask a lot of questions if you do!
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default SourceOfFunds;