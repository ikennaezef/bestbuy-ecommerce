import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {

    try {
      // Create Checkout Sessions from body params.

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1LOoqkA3F3npAw6c75DtcuUR' },
          { shipping_rate: 'shr_1LOoukA3F3npAw6c21zEaPuZ' },
        ],
        line_items: req.body.map(product => {
          const img = product.image[0].asset._ref;
          const newImg = img.replace('image-', 'https://cdn.sanity.io/images/52taeql2/production/').replace('-webp', '.webp').replace('-jpg', '.jpg').replace('-png', '.png');

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: product.productName,
                images: [newImg]
              },
              unit_amount: product.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: product.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}