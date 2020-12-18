import styles from "./paginator.module.css"
import React, {useState} from 'react'
import cn from 'classnames'


type PropsType ={
	totalUsersCount:number
	pageSize:number
	currentPage:number
	onPageChanged: (page:number) => void
	portionSize?:number

}
export const Paginator: React.FC<PropsType> = ({totalUsersCount,
											   pageSize,
											   currentPage,
											   onPageChanged,
											   portionSize=10}) => {
		let pagesCount = Math.ceil(totalUsersCount / pageSize)    // переменная количество страниц
		let pages = [];																											// создаём пустой массив
		for (let i = 1; i <= pagesCount; i++) {
				pages.push(i)
		}

		let portionCount = Math.ceil(pagesCount / portionSize);
		let [portionNumber, setPortionNumber] = useState(1);
		let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
		let rightPortionNumber = portionNumber * portionSize;
		return <div className={styles.paginator}>
				{portionNumber > 1 &&
				<button onClick={() => {
						setPortionNumber(portionNumber - 1);
						onPageChanged(leftPortionNumber - portionSize)
				}}
				> PREV </button>}
				{pages
						 .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
						 .map(p => {
								 return <span className={ cn ({
										 [styles.selectedPage]: currentPage === p          // условие для того чтобы применить стили или нет
								 } , styles.pageNumber)}
								              key={p}
								              onClick={(e) => {onPageChanged(p)
								              }}> {p} </span>
						 })}




				{portionCount > portionNumber &&
				<button onClick={() => {
						setPortionNumber(portionNumber + 1)
						onPageChanged(leftPortionNumber + portionSize)
				}
				}> NEXT </button>}
		</div>
}