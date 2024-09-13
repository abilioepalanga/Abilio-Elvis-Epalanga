interface WalletBalance {
    blockchain: string; // Added to define blockchain property
    currency: string;
    amount: number;
}
interface FormattedWalletBalance extends WalletBalance {
    formatted: string;
}

interface Props extends BoxProps {}

const WalletPage: React.FC<Props> = (props: Props) => {
    const { ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    // Priority function for blockchains
    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case "Osmosis":
                return 100;
            case "Ethereum":
                return 50;
            case "Arbitrum":
                return 30;
            case "Zilliqa":
                return 20;
            case "Neo":
                return 20;
            default:
                return -99;
        }
    };

    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => {
                const priority = getPriority(balance.blockchain);
                return priority > -99 && balance.amount > 0;
            })
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain);
                const rightPriority = getPriority(rhs.blockchain);
                return rightPriority - leftPriority;
            });
    }, [balances]); // Removed prices from dependencies

    const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return {
            ...balance,
            formatted: balance.amount.toFixed(2), // Fixed formatting with 2 decimal places
            usdValue,
        };
    });

    const rows = formattedBalances.map((balance: FormattedWalletBalance) => (
        <WalletRow
            className={classes.row}
            key={balance.currency} // Use a unique key (currency) instead of index
            amount={balance.amount}
            usdValue={balance.usdValue}
            formattedAmount={balance.formatted}
        />
    ));

    return <div {...rest}>{rows}</div>;
};
