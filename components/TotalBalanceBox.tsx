import React from 'react'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
        <div className="flex flex-col gap-6">
          <h2 className="header-2">{totalBanks} Bank Accounts</h2>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
