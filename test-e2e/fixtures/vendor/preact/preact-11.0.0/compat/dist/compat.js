var e = require('preact'),
	t = require('preact/hooks'),
	n = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function r(e, t) {
	for (var n in e) if ('__source' !== n && !(n in t)) return !0;
	for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0;
	return !1;
}
function o(e) {
	this.props = e;
}
function u(t, n) {
	function o() {}
	return (
		(o.prototype = new e.Component()),
		(o.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
		(o.prototype.render = function (n) {
			return e.createElement(t, n);
		}),
		(o.prototype.shouldComponentUpdate = function (e) {
			var t = this.props.ref,
				o = t == e.ref;
			return (
				!o && t && (t.call ? t(null) : (t.current = null)),
				n ? !n(this.props, e) || !o : r(this.props, e)
			);
		}),
		(o.prototype.isReactComponent = !0),
		(o.__f = !0),
		o
	);
}
((o.prototype = new e.Component()).isPureReactComponent = !0),
	(o.prototype.shouldComponentUpdate = function (e, t) {
		return r(this.props, e) || r(this.state, t);
	});
var i = e.options.__b;
e.options.__b = (e, t) => {
	e.type &&
		e.type.__f &&
		t.ref &&
		((t.props.ref = t.ref), (t.ref = null), (e.ref = null)),
		i && i(e, t);
};
var l =
	('undefined' != typeof Symbol &&
		Symbol.for &&
		Symbol.for('react.forward_ref')) ||
	3911;
function a(e) {
	function t(t, n) {
		var r = Object.assign({}, t);
		return (
			delete r.ref,
			e(
				r,
				!(n = t.ref || n) || ('object' == typeof n && !('current' in n))
					? null
					: n
			)
		);
	}
	return (
		(t.$$typeof = l),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
		t
	);
}
var c = (t, n) => (null == t ? null : e.toChildArray(e.toChildArray(t).map(n))),
	f = {
		map: c,
		forEach: c,
		count: (t) => (t ? e.toChildArray(t).length : 0),
		only(t) {
			var n = e.toChildArray(t);
			if (1 !== n.length) throw 'Children.only';
			return n[0];
		},
		toArray: e.toChildArray
	};
Promise.prototype.then.bind(Promise.resolve());
var s = (e) => 28 & e.flags && (!(16 & e.flags) || e.props.__P == h(e.__));
function p(e, t) {
	if (null == e.__k) return null;
	for (t = t || 0; t < e.__k.length; t++) {
		var n = e.__k[t];
		if (null != n) {
			if (3 & n.flags) return n.__e;
			if (s(n)) {
				var r = p(n);
				if (r) return r;
			}
		}
	}
	return null;
}
function h(e) {
	for (var t = 16 & e.flags ? e.props.__P : null, n = e.__; null == t && n; )
		16 & n.flags ? (t = n.props.__P) : 2 & n.flags && (t = n.__e), (n = n.__);
	return t;
}
var v = e.options.__e;
e.options.__e = function (e, t) {
	if (e.then)
		for (var n, r = t; (r = r.__); )
			if ((n = r.__c) && n.__c) return n.__c(e, t);
	v(e, t);
};
var m = e.options.unmount;
function b() {
	(this.__u = 0), (this.t = null), (this.__P = null), (this.o = 0);
}
function d(e) {
	var t = e.__.__c;
	return t && t.__e && t.__e(e);
}
function x(t) {
	var n, r, o;
	function u(u) {
		if (
			(n ||
				(n = t()).then(
					(e) => {
						r = e.default || e;
					},
					(e) => {
						o = e;
					}
				),
			o)
		)
			throw o;
		if (!r) throw n;
		return e.createElement(r, u);
	}
	return (u.displayName = 'Lazy'), (u.__f = !0), u;
}
function y() {
	(this.u = null), (this.i = null);
}
(e.options.unmount = function (e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && 32 == (32 & e.flags) && (e.flags |= 2), m && m(e);
}),
	((b.prototype = new e.Component()).__c = function (e, t) {
		var n = t.__c;
		if (null == n.__R) {
			var r = this;
			null == r.t && (r.t = []), r.t.push(n);
			var o = d(r.__i),
				u = !1,
				i = () => {
					u || ((u = !0), (n.__R = null), o ? o(l) : l());
				};
			n.__R = i;
			var l = () => {
					var e;
					if (!--r.__u)
						for (this.__P = null, r.setState({ __e: !1 }); (e = r.t.pop()); )
							e.forceUpdate();
				},
				a = 32 == (32 & t.flags);
			r.__u++ ||
				a ||
				((this.__P = document.createElement('div')), r.setState({ __e: !0 })),
				e.then(i, i);
		}
	}),
	(b.prototype.componentWillUnmount = function () {
		(this.t = []), (this.__P = null);
	}),
	(b.prototype.render = function (t, n) {
		null == this.__P && (this.__P = h(this.__i));
		var r = n.__e && e.createElement(e.Fragment, null, t.fallback),
			o = e.createPortal(t.children, this.__P);
		return n.__e ? (o.__v = this.o) : (this.o = o.__v), [o, r];
	});
var g = (e, t, n) => {
	if (
		(++n[1] === n[0] && e.i.delete(t.props),
		e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.i.size))
	)
		for (n = e.u; n; ) {
			for (; n.length > 3; ) n.pop()();
			if (n[1] < n[0]) break;
			e.u = n = n[2];
		}
};
((y.prototype = new e.Component()).__e = function (e) {
	var t = this,
		n = d(t.__i),
		r = t.i.get(e.props);
	return (
		r[0]++,
		(o) => {
			var u = () => {
				t.props.revealOrder ? (r.push(o), g(t, e, r)) : o();
			};
			n ? n(u) : u();
		}
	);
}),
	(y.prototype.render = function (t) {
		(this.u = null), (this.i = new Map());
		var n = e.toChildArray(t.children);
		t.revealOrder && 'b' === t.revealOrder[0] && n.reverse();
		for (var r = n.length; r--; )
			this.i.set(n[r].props, (this.u = [1, 0, this.u]));
		return t.children;
	}),
	(y.prototype.componentDidUpdate = y.prototype.componentDidMount = function () {
		this.i.forEach((e, t) => {
			g(this, { props: t }, e);
		});
	});
var _ =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.element')) ||
		60103,
	O = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	S = 'undefined' != typeof document,
	j = (e) =>
		('undefined' != typeof Symbol && 'symbol' == typeof Symbol()
			? /fil|che|rad/i
			: /fil|che|ra/i
		).test(e);
function w(t, n, r) {
	null == n.__k && (n.textContent = ''),
		e.render(t, n),
		'function' == typeof r && r();
	var o = n.__k.__k[0];
	return o ? o.__c : null;
}
function R(t, n, r) {
	return e.hydrate(t, n), 'function' == typeof r && r(), t ? t.__c : null;
}
(e.Component.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate'
	].forEach((t) => {
		Object.defineProperty(e.Component.prototype, t, {
			configurable: !0,
			get() {
				return this['UNSAFE_' + t];
			},
			set(e) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: e
				});
			}
		});
	});
var C = e.options.event;
function E() {}
function k() {
	return this.cancelBubble;
}
function A() {
	return this.defaultPrevented;
}
e.options.event = (e) => (
	C && (e = C(e)),
	(e.persist = E),
	(e.isPropagationStopped = k),
	(e.isDefaultPrevented = A),
	(e.nativeEvent = e)
);
var L,
	N = {
		configurable: !0,
		get() {
			return this.class;
		}
	},
	P = e.options.vnode;
e.options.vnode = (t) => {
	var r,
		o = t.type,
		u = t.props,
		i = u;
	if ('string' == typeof o) {
		var l = -1 === o.indexOf('-');
		i = {};
		var a = u.style;
		if ('object' == typeof a)
			for (r in a) 'number' != typeof a[r] || n.test(r) || (a[r] += 'px');
		for (r in u) {
			var c = u[r];
			(S && 'children' === r && 'noscript' === o) ||
				('value' === r && 'defaultValue' in u && null == c) ||
				('defaultValue' === r && 'value' in u && null == u.value
					? (r = 'value')
					: 'download' === r && !0 === c
					? (c = '')
					: /ondoubleclick/i.test(r)
					? (r = 'ondblclick')
					: /^onchange(textarea|input)/i.test(r + o) && !j(u.type)
					? (r = 'oninput')
					: /^onfocus$/i.test(r)
					? (r = 'onfocusin')
					: /^onblur$/i.test(r)
					? (r = 'onfocusout')
					: /^on(Ani|Tra|Tou|BeforeInp)/.test(r)
					? (r = r.toLowerCase())
					: l && O.test(r)
					? (r = r.replace(/[A-Z0-9]/, '-$&').toLowerCase())
					: null === c && (c = void 0),
				(i[r] = c));
		}
		'select' == o &&
			i.multiple &&
			Array.isArray(i.value) &&
			(i.value = e.toChildArray(u.children).forEach((e) => {
				e.props.selected = -1 != i.value.indexOf(e.props.value);
			})),
			'select' == o &&
				null != i.defaultValue &&
				(i.value = e.toChildArray(u.children).forEach((e) => {
					e.props.selected = i.multiple
						? -1 != i.defaultValue.indexOf(e.props.value)
						: i.defaultValue == e.props.value;
				})),
			(t.props = i),
			o &&
				u.class != u.className &&
				((N.enumerable = 'className' in u),
				null != u.className && (i.class = u.className),
				Object.defineProperty(i, 'className', N));
	} else if ('function' == typeof o && o.defaultProps)
		for (r in o.defaultProps) void 0 === i[r] && (i[r] = o.defaultProps[r]);
	(t.$$typeof = _), P && P(t);
};
var U = e.options.__r;
e.options.__r = function (e) {
	U && U(e),
		(L = (function (e) {
			for (var t = e.c, n = e.__; null == t && n; ) (t = n.c), (n = n.__);
			return t;
		})(e));
};
var $ = {
		ReactCurrentDispatcher: {
			current: { readContext: (e) => L[e.__c].props.value }
		}
	},
	D =
		'object' == typeof performance && 'function' == typeof performance.now
			? performance.now.bind(performance)
			: () => Date.now();
function F(t) {
	return e.createElement.bind(null, t);
}
function I(e) {
	return !!e && e.$$typeof === _;
}
function M(t) {
	return I(t) ? e.cloneElement.apply(null, arguments) : t;
}
function W(t) {
	return !!t.__k && (e.render(null, t), !0);
}
function T(e) {
	return null == e ? null : 1 == e.nodeType ? e : p(e.__i);
}
var z = (e, t) => e(t),
	V = e.Fragment,
	q = (e, t) => e(t),
	B = {
		useState: t.useState,
		useReducer: t.useReducer,
		flushSync: q,
		useEffect: t.useEffect,
		useLayoutEffect: t.useLayoutEffect,
		useRef: t.useRef,
		useImperativeHandle: t.useImperativeHandle,
		useMemo: t.useMemo,
		useCallback: t.useCallback,
		useContext: t.useContext,
		useDebugValue: t.useDebugValue,
		version: '17.0.2',
		Children: f,
		render: w,
		hydrate: R,
		unmountComponentAtNode: W,
		createPortal: e.createPortal,
		createElement: e.createElement,
		createContext: e.createContext,
		createFactory: F,
		cloneElement: M,
		createRef: e.createRef,
		Fragment: e.Fragment,
		isValidElement: I,
		findDOMNode: T,
		Component: e.Component,
		PureComponent: o,
		memo: u,
		forwardRef: a,
		unstable_batchedUpdates: z,
		StrictMode: V,
		Suspense: b,
		SuspenseList: y,
		lazy: x,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $,
		createRoot: e.createRoot
	};
Object.defineProperty(exports, 'Component', {
	enumerable: !0,
	get: function () {
		return e.Component;
	}
}),
	Object.defineProperty(exports, 'Fragment', {
		enumerable: !0,
		get: function () {
			return e.Fragment;
		}
	}),
	Object.defineProperty(exports, 'createContext', {
		enumerable: !0,
		get: function () {
			return e.createContext;
		}
	}),
	Object.defineProperty(exports, 'createElement', {
		enumerable: !0,
		get: function () {
			return e.createElement;
		}
	}),
	Object.defineProperty(exports, 'createPortal', {
		enumerable: !0,
		get: function () {
			return e.createPortal;
		}
	}),
	Object.defineProperty(exports, 'createRef', {
		enumerable: !0,
		get: function () {
			return e.createRef;
		}
	}),
	Object.defineProperty(exports, 'createRoot', {
		enumerable: !0,
		get: function () {
			return e.createRoot;
		}
	}),
	(exports.Children = f),
	(exports.PureComponent = o),
	(exports.StrictMode = V),
	(exports.Suspense = b),
	(exports.SuspenseList = y),
	(exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
	(exports.cloneElement = M),
	(exports.createFactory = F),
	(exports.default = B),
	(exports.findDOMNode = T),
	(exports.flushSync = q),
	(exports.forwardRef = a),
	(exports.hydrate = R),
	(exports.isValidElement = I),
	(exports.lazy = x),
	(exports.memo = u),
	(exports.render = w),
	(exports.unmountComponentAtNode = W),
	(exports.unstable_IdlePriority = 5),
	(exports.unstable_ImmediatePriority = 1),
	(exports.unstable_LowPriority = 4),
	(exports.unstable_NormalPriority = 3),
	(exports.unstable_UserBlockingPriority = 2),
	(exports.unstable_batchedUpdates = z),
	(exports.unstable_now = D),
	(exports.unstable_runWithPriority = function (e, t) {
		return t();
	}),
	(exports.version = '17.0.2'),
	Object.keys(t).forEach(function (e) {
		'default' === e ||
			exports.hasOwnProperty(e) ||
			Object.defineProperty(exports, e, {
				enumerable: !0,
				get: function () {
					return t[e];
				}
			});
	});
//# sourceMappingURL=compat.js.map
