import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Card } from 'antd';
import { RingProgress } from '@ant-design/plots';
import { Typography } from 'antd';

const DTIGraphPause: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title } = Typography;

    const config = {
        height: 100,
        width: 100,
        autoFit: false,
        percent: 0.6,
        color: ['#c04e4e', '#3a5e9c'],
        innerRadius: 0.85,
        radius: 0.98,
        statistic: {
            title: {
                style: {
                    color: '#3a5e9c',
                    fontSize: '12px',
                    lineHeight: '14px',
                },
            },
        },
        // #a8bade
        // #f2f2f2
    };

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    Dave, great news! Based on your information, your Debt to Income Ratio is ACCEPTABLE!
                </Title>
                <Card title="Debt to Income Ratio" style={{ width: 300 }}>
                    <RingProgress {...config} />
                    <div>
                        Monthly Income
                    </div>
                    <div>
                        Monthly Expenses
                    </div>
                </Card>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={() => nextStep()}
                        style={{ color: '#000', borderColor: '#ff1a8c', borderRadius: '5px', marginTop: '20px' }}
                        ghost>
                        Continue
                    </Button>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>

            </Col>
        </Row>
    )
}

export default DTIGraphPause;