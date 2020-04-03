import React from 'react'

function FAQ(){
  return (
    <>
      <h1 className="display-4 text-center faq bg-light text-secondary">Frequently Asked Questions</h1>
      <div className="accordion container-fluid text-left-lg text-center-md" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                I missed the delivery of my order today. What should I do?
              </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
            The courier service delivering your order usually tries to deliver on the next business day in case you miss a delivery.
            <br/>
            You can check your SMS for more details on when the courier service will try to deliver again.            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How do returns work?
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              You can raise a request to return your items with these simple steps:
              <br/>
              1. Log into your shopify account<br/>

              2. Go to My Orders<br/>

              3. Click on 'Return' against the item you wish to return or exchange<br/>

              4. Fill in the details and raise a return request<br/>

              Once you raise a request, you'll get an email and SMS confirming that your request is being processed. Based on the item, your request may be automatically approved or you may be contacted for more details. If the request is approved, the item will be picked up after which you will get a replacement or refund. You can also track the status of your return request instantly from the 'My Orders' section of your shopify account.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How can I order for large quantities of the product as part of a corporate order?
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              You can write to corporatesales@shopify.com for your corporate gifting requirements.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Why do I see different prices for the same product?
              </button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div className="card-body">
              You could see different prices for the same product, as it could be listed by many Sellers.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ