import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";
import { CiWallet, CiSettings } from "react-icons/ci";
import { FaTicketAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Welcome, Member!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* My Events Card */}
                <Card className="shadow-lg">
                    <CardHeader className="flex gap-3">
                        <FaTicketAlt className="text-3xl text-danger-500" />
                        <div className="flex flex-col">
                            <p className="text-md font-bold">My Events</p>
                            <p className="text-small text-default-500">View your upcoming events</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>You have <strong>3</strong> upcoming events.</p>
                    </CardBody>
                    <CardFooter>
                        <Button as={Link} href="/member/events" color="danger" variant="ghost">
                            View Details
                        </Button>
                    </CardFooter>
                </Card>

                {/* Transactions Card */}
                <Card className="shadow-lg">
                    <CardHeader className="flex gap-3">
                        <CiWallet className="text-3xl text-danger-500" />
                        <div className="flex flex-col">
                            <p className="text-md font-bold">Transactions</p>
                            <p className="text-small text-default-500">Check your transaction history</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>You have made <strong>5</strong> transactions this month.</p>
                    </CardBody>
                    <CardFooter>
                        <Button as={Link} href="/member/transaction" color="danger" variant="ghost">
                            View History
                        </Button>
                    </CardFooter>
                </Card>

                {/* Settings Card */}
                <Card className="shadow-lg">
                    <CardHeader className="flex gap-3">
                        <CiSettings className="text-3xl text-danger-500" />
                        <div className="flex flex-col">
                            <p className="text-md font-bold">Settings</p>
                            <p className="text-small text-default-500">Manage your account</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Update your profile and password.</p>
                    </CardBody>
                    <CardFooter>
                        <Button as={Link} href="/member/setting" color="danger" variant="ghost">
                            Go to Settings
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;