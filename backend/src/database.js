import mongoose from 'mongoose';

const uri = 'mongodb://localhost/graphql-react-app';
const opts = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose
	.connect(uri, opts)
	.then(() => console.log('DB is connected'))
	.catch((e) => console.log(e));
