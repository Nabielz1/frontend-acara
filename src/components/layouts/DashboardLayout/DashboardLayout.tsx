import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";
import DashboardLayoutSidebar from './DashboardLayoutSidebar/DashboardLayoutSidebar';

interface PropTypes {
    children: ReactNode,
    title?: string
}

const DashboardLayout = (props: PropTypes) => {
    const {children, title} = props;
    return (
        <>
            <PageHead title={title}/>
            <div>
                <DashboardLayoutSidebar />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
};

export default DashboardLayout