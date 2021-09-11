import { Component, ErrorInfo } from "react";
import { Result, Button } from 'antd';
import { StateTypes, PropsTypes } from '.';

class ErrorBoundary extends Component<PropsTypes, StateTypes> {
    constructor(props: PropsTypes) {
        super(props)
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(_: Error): StateTypes {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Result
                    status="404"
                    title="404"
                    subTitle="Something went wrong!."
                    extra={<Button type="primary">Back Home</Button>}
                />
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;