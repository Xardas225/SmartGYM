import mitt from 'mitt'

type Events = {
}

const emitter = mitt<Events>();

export default emitter