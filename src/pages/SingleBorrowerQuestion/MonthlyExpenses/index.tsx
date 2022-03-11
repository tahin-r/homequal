import { useWizard } from 'react-use-wizard';
import { Form, Button, Row, Col, Input } from 'antd';
import { Typography } from 'antd';

const MonthlyExpenses: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    OK. Now let’s look at your expenses. Enter your monthly payment for any that apply...
                </Title>
                <Form
                    name="monthlypayment"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Auto Payments"
                        labelAlign='right'
                        name="AutoPayments"
                        rules={[{ required: true, message: 'Please input Payment!' }]}
                    >
                        <Input placeholder="Payment" />
                    </Form.Item>
                    <Form.Item
                        label="Credit Cards"
                        labelAlign='right'
                        name="CreditCards"
                        rules={[{ required: true, message: 'Please input Payment!' }]}
                    >
                        <Input placeholder="Payment" />
                    </Form.Item>
                    <Form.Item
                        label="Student Loans"
                        labelAlign='right'
                        name="StudentLoans"
                        rules={[{ required: true, message: 'Please input Payment!' }]}
                    >
                        <Input placeholder="Payment" />
                    </Form.Item>
                    <Form.Item
                        label="Any Other"
                        labelAlign='right'
                        name="AnyOther"
                        rules={[{ required: true, message: 'Please input Payment!' }]}
                    >
                        <Input placeholder="Payment" />
                    </Form.Item>
                </Form>
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