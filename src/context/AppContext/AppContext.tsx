import {createContext, type FC, useContext} from "react";

let data: any = 123

const setData = (value: any) => {
	data = value;
}

const AppContext = createContext<any>([data, setData])

interface ACProps {
	children: any
}

export const AppContextProvider: FC<ACProps> = ({children}) => (
		<AppContext.Provider value={[data, setData]}>
			{children}
		</AppContext.Provider>
	);

export const useAppContextData = () => useContext(AppContext)
