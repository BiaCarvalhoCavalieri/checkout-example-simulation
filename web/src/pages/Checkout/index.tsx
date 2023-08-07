import { Header } from '../../components/Header'
import { ProductOverview } from '../../components/ProductOverview'
import { SummaryTotalizers } from '../../components/SummaryTotalizers'
import { TopBar } from '../../components/TopBar'
import { OrderFormProvider } from '../../contexts/OrderForm'


import './styles.css'


export const Checkout = () => {
  return (
    <OrderFormProvider>
      <div className='container'>
        <Header/>
        <TopBar/>
        <section className="main__content content content-flex">
          <ProductOverview />
          <SummaryTotalizers/>
        </section>
      </div>
    </OrderFormProvider>
  )
}
