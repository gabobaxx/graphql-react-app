import Message from '../../models/Message';

const Query = {
	ping: () => 'Pong!',
	messages: async () => await Message.find(),
};

export default Query;
