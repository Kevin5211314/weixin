define(function (t, n, e) {
    (function (t) {
        String.prototype.trim === t && (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        }), Array.prototype.reduce === t && (Array.prototype.reduce = function (n) {
            if (this === void 0 || null === this)throw new TypeError;
            var e, i = Object(this), r = i.length >>> 0, o = 0;
            if ("function" != typeof n)throw new TypeError;
            if (0 == r && 1 == arguments.length)throw new TypeError;
            if (arguments.length >= 2)e = arguments[1]; else for (; ;) {
                if (o in i) {
                    e = i[o++];
                    break
                }
                if (++o >= r)throw new TypeError
            }
            for (; r > o;)o in i && (e = n.call(t, e, i[o], o, i)), o++;
            return e
        })
    })();
    var i = function () {
        function t(t) {
            return null == t ? t + "" : X[W.call(t)] || "object"
        }

        function n(n) {
            return"function" == t(n)
        }

        function e(t) {
            return null != t && t == t.window
        }

        function i(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function r(n) {
            return"object" == t(n)
        }

        function o(t) {
            return r(t) && !e(t) && t.__proto__ == Object.prototype
        }

        function a(t) {
            return t instanceof Array
        }

        function s(t) {
            return"number" == typeof t.length
        }

        function u(t) {
            return k.call(t, function (t) {
                return null != t
            })
        }

        function c(t) {
            return t.length > 0 ? j.fn.concat.apply([], t) : t
        }

        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function f(t) {
            return t in _ ? _[t] : _[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function h(t, n) {
            return"number" != typeof n || z[l(t)] ? n : n + "px"
        }

        function p(t) {
            var n, e;
            return $[t] || (n = A.createElement(t), A.body.appendChild(n), e = M(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), $[t] = e), $[t]
        }

        function d(t) {
            return"children"in t ? P.call(t.children) : j.map(t.childNodes, function (t) {
                return 1 == t.nodeType ? t : E
            })
        }

        function m(t, n, e) {
            for (T in n)e && (o(n[T]) || a(n[T])) ? (o(n[T]) && !o(t[T]) && (t[T] = {}), a(n[T]) && !a(t[T]) && (t[T] = []), m(t[T], n[T], e)) : n[T] !== E && (t[T] = n[T])
        }

        function v(t, n) {
            return n === E ? j(t) : j(t).filter(n)
        }

        function g(t, e, i, r) {
            return n(e) ? e.call(t, i, r) : e
        }

        function y(t, n, e) {
            null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
        }

        function b(t, n) {
            var e = t.className, i = e && e.baseVal !== E;
            return n === E ? i ? e.baseVal : e : (i ? e.baseVal = n : t.className = n, E)
        }

        function x(t) {
            var n;
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? j.parseJSON(t) : t : n) : t
            } catch (e) {
                return t
            }
        }

        function w(t, n) {
            n(t);
            for (var e in t.childNodes)w(t.childNodes[e], n)
        }

        var E, T, j, S, N, C, O = [], P = O.slice, k = O.filter, A = window.document, $ = {}, _ = {}, M = A.defaultView.getComputedStyle, z = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1}, R = /^\s*<(\w+|!)[^>]*>/, D = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, L = /^(?:body|html)$/i, Z = ["val", "css", "html", "text", "data", "width", "height", "offset"], q = ["after", "prepend", "before", "append"], F = A.createElement("table"), B = A.createElement("tr"), I = {tr: A.createElement("tbody"), tbody: F, thead: F, tfoot: F, td: B, th: B, "*": A.createElement("div")}, H = /complete|loaded|interactive/, U = /^\.([\w-]+)$/, V = /^#([\w-]*)$/, J = /^[\w-]+$/, X = {}, W = X.toString, Y = {}, G = A.createElement("div");
        return Y.matches = function (t, n) {
            if (!t || 1 !== t.nodeType)return!1;
            var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (e)return e.call(t, n);
            var i, r = t.parentNode, o = !r;
            return o && (r = G).appendChild(t), i = ~Y.qsa(r, n).indexOf(t), o && G.removeChild(t), i
        }, N = function (t) {
            return t.replace(/-+(.)?/g, function (t, n) {
                return n ? n.toUpperCase() : ""
            })
        }, C = function (t) {
            return k.call(t, function (n, e) {
                return t.indexOf(n) == e
            })
        }, Y.fragment = function (t, n, e) {
            t.replace && (t = t.replace(D, "<$1></$2>")), n === E && (n = R.test(t) && RegExp.$1), n in I || (n = "*");
            var i, r, a = I[n];
            return a.innerHTML = "" + t, r = j.each(P.call(a.childNodes), function () {
                a.removeChild(this)
            }), o(e) && (i = j(r), j.each(e, function (t, n) {
                Z.indexOf(t) > -1 ? i[t](n) : i.attr(t, n)
            })), r
        }, Y.Z = function (t, n) {
            return t = t || [], t.__proto__ = j.fn, t.selector = n || "", t
        }, Y.isZ = function (t) {
            return t instanceof Y.Z
        }, Y.init = function (t, e) {
            if (t) {
                if (n(t))return j(A).ready(t);
                if (Y.isZ(t))return t;
                var i;
                if (a(t))i = u(t); else if (r(t))i = [o(t) ? j.extend({}, t) : t], t = null; else if (R.test(t))i = Y.fragment(t.trim(), RegExp.$1, e), t = null; else {
                    if (e !== E)return j(e).find(t);
                    i = Y.qsa(A, t)
                }
                return Y.Z(i, t)
            }
            return Y.Z()
        }, j = function (t, n) {
            return Y.init(t, n)
        }, j.extend = function (t) {
            var n, e = P.call(arguments, 1);
            return"boolean" == typeof t && (n = t, t = e.shift()), e.forEach(function (e) {
                m(t, e, n)
            }), t
        }, Y.qsa = function (t, n) {
            var e;
            return i(t) && V.test(n) ? (e = t.getElementById(RegExp.$1)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(U.test(n) ? t.getElementsByClassName(RegExp.$1) : J.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n))
        }, j.contains = function (t, n) {
            return t !== n && t.contains(n)
        }, j.type = t, j.isFunction = n, j.isWindow = e, j.isArray = a, j.isPlainObject = o, j.isEmptyObject = function (t) {
            var n;
            for (n in t)return!1;
            return!0
        }, j.inArray = function (t, n, e) {
            return O.indexOf.call(n, t, e)
        }, j.camelCase = N, j.trim = function (t) {
            return t.trim()
        }, j.uuid = 0, j.support = {}, j.expr = {}, j.map = function (t, n) {
            var e, i, r, o = [];
            if (s(t))for (i = 0; t.length > i; i++)e = n(t[i], i), null != e && o.push(e); else for (r in t)e = n(t[r], r), null != e && o.push(e);
            return c(o)
        }, j.each = function (t, n) {
            var e, i;
            if (s(t)) {
                for (e = 0; t.length > e; e++)if (n.call(t[e], e, t[e]) === !1)return t
            } else for (i in t)if (n.call(t[i], i, t[i]) === !1)return t;
            return t
        }, j.grep = function (t, n) {
            return k.call(t, n)
        }, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, n) {
            X["[object " + n + "]"] = n.toLowerCase()
        }), j.fn = {forEach: O.forEach, reduce: O.reduce, push: O.push, sort: O.sort, indexOf: O.indexOf, concat: O.concat, map: function (t) {
            return j(j.map(this, function (n, e) {
                return t.call(n, e, n)
            }))
        }, slice: function () {
            return j(P.apply(this, arguments))
        }, ready: function (t) {
            return H.test(A.readyState) ? t(j) : A.addEventListener("DOMContentLoaded", function () {
                t(j)
            }, !1), this
        }, get: function (t) {
            return t === E ? P.call(this) : this[t >= 0 ? t : t + this.length]
        }, toArray: function () {
            return this.get()
        }, size: function () {
            return this.length
        }, remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        }, each: function (t) {
            return O.every.call(this, function (n, e) {
                return t.call(n, e, n) !== !1
            }), this
        }, filter: function (t) {
            return n(t) ? this.not(this.not(t)) : j(k.call(this, function (n) {
                return Y.matches(n, t)
            }))
        }, add: function (t, n) {
            return j(C(this.concat(j(t, n))))
        }, is: function (t) {
            return this.length > 0 && Y.matches(this[0], t)
        }, not: function (t) {
            var e = [];
            if (n(t) && t.call !== E)this.each(function (n) {
                t.call(this, n) || e.push(this)
            }); else {
                var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? P.call(t) : j(t);
                this.forEach(function (t) {
                    0 > i.indexOf(t) && e.push(t)
                })
            }
            return j(e)
        }, has: function (t) {
            return this.filter(function () {
                return r(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        }, eq: function (t) {
            return-1 === t ? this.slice(t) : this.slice(t, +t + 1)
        }, first: function () {
            var t = this[0];
            return t && !r(t) ? t : j(t)
        }, last: function () {
            var t = this[this.length - 1];
            return t && !r(t) ? t : j(t)
        }, find: function (t) {
            var n, e = this;
            return n = "object" == typeof t ? j(t).filter(function () {
                var t = this;
                return O.some.call(e, function (n) {
                    return j.contains(n, t)
                })
            }) : 1 == this.length ? j(Y.qsa(this[0], t)) : this.map(function () {
                return Y.qsa(this, t)
            })
        }, closest: function (t, n) {
            var e = this[0], r = !1;
            for ("object" == typeof t && (r = j(t)); e && !(r ? r.indexOf(e) >= 0 : Y.matches(e, t));)e = e !== n && !i(e) && e.parentNode;
            return j(e)
        }, parents: function (t) {
            for (var n = [], e = this; e.length > 0;)e = j.map(e, function (t) {
                return(t = t.parentNode) && !i(t) && 0 > n.indexOf(t) ? (n.push(t), t) : E
            });
            return v(n, t)
        }, parent: function (t) {
            return v(C(this.pluck("parentNode")), t)
        }, children: function (t) {
            return v(this.map(function () {
                return d(this)
            }), t)
        }, contents: function () {
            return this.map(function () {
                return P.call(this.childNodes)
            })
        }, siblings: function (t) {
            return v(this.map(function (t, n) {
                return k.call(d(n.parentNode), function (t) {
                    return t !== n
                })
            }), t)
        }, empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        }, pluck: function (t) {
            return j.map(this, function (n) {
                return n[t]
            })
        }, show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = null), "none" == M(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
            })
        }, replaceWith: function (t) {
            return this.before(t).remove()
        }, wrap: function (t) {
            var e = n(t);
            if (this[0] && !e)var i = j(t).get(0), r = i.parentNode || this.length > 1;
            return this.each(function (n) {
                j(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i)
            })
        }, wrapAll: function (t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var n; (n = t.children()).length;)t = n.first();
                j(t).append(this)
            }
            return this
        }, wrapInner: function (t) {
            var e = n(t);
            return this.each(function (n) {
                var i = j(this), r = i.contents(), o = e ? t.call(this, n) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                j(this).replaceWith(j(this).children())
            }), this
        }, clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        }, hide: function () {
            return this.css("display", "none")
        }, toggle: function (t) {
            return this.each(function () {
                var n = j(this);
                (t === E ? "none" == n.css("display") : t) ? n.show() : n.hide()
            })
        }, prev: function (t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        }, next: function (t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        }, html: function (t) {
            return t === E ? this.length > 0 ? this[0].innerHTML : null : this.each(function (n) {
                var e = this.innerHTML;
                j(this).empty().append(g(this, t, n, e))
            })
        }, text: function (t) {
            return t === E ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                this.textContent = t
            })
        }, attr: function (t, n) {
            var e;
            return"string" == typeof t && n === E ? 0 == this.length || 1 !== this[0].nodeType ? E : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e : this.each(function (e) {
                if (1 === this.nodeType)if (r(t))for (T in t)y(this, T, t[T]); else y(this, t, g(this, n, e, this.getAttribute(t)))
            })
        }, removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && y(this, t)
            })
        }, prop: function (t, n) {
            return n === E ? this[0] && this[0][t] : this.each(function (e) {
                this[t] = g(this, n, e, this[t])
            })
        }, data: function (t, n) {
            var e = this.attr("data-" + l(t), n);
            return null !== e ? x(e) : E
        }, val: function (t) {
            return t === E ? this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function (n) {
                this.value = g(this, t, n, this.value)
            })
        }, offset: function (t) {
            if (t)return this.each(function (n) {
                var e = j(this), i = g(this, t, n, e.offset()), r = e.offsetParent().offset(), o = {top: i.top - r.top, left: i.left - r.left};
                "static" == e.css("position") && (o.position = "relative"), e.css(o)
            });
            if (0 == this.length)return null;
            var n = this[0].getBoundingClientRect();
            return{left: n.left + window.pageXOffset, top: n.top + window.pageYOffset, width: Math.round(n.width), height: Math.round(n.height)}
        }, css: function (n, e) {
            if (2 > arguments.length && "string" == typeof n)return this[0] && (this[0].style[N(n)] || M(this[0], "").getPropertyValue(n));
            var i = "";
            if ("string" == t(n))e || 0 === e ? i = l(n) + ":" + h(n, e) : this.each(function () {
                this.style.removeProperty(l(n))
            }); else for (T in n)n[T] || 0 === n[T] ? i += l(T) + ":" + h(T, n[T]) + ";" : this.each(function () {
                this.style.removeProperty(l(T))
            });
            return this.each(function () {
                this.style.cssText += ";" + i
            })
        }, index: function (t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        }, hasClass: function (t) {
            return O.some.call(this, function (t) {
                return this.test(b(t))
            }, f(t))
        }, addClass: function (t) {
            return this.each(function (n) {
                S = [];
                var e = b(this), i = g(this, t, n, e);
                i.split(/\s+/g).forEach(function (t) {
                    j(this).hasClass(t) || S.push(t)
                }, this), S.length && b(this, e + (e ? " " : "") + S.join(" "))
            })
        }, removeClass: function (t) {
            return this.each(function (n) {
                return t === E ? b(this, "") : (S = b(this), g(this, t, n, S).split(/\s+/g).forEach(function (t) {
                    S = S.replace(f(t), " ")
                }), b(this, S.trim()), E)
            })
        }, toggleClass: function (t, n) {
            return this.each(function (e) {
                var i = j(this), r = g(this, t, e, b(this));
                r.split(/\s+/g).forEach(function (t) {
                    (n === E ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t)
                })
            })
        }, scrollTop: function () {
            return this.length ? "scrollTop"in this[0] ? this[0].scrollTop : this[0].scrollY : E
        }, position: function () {
            if (this.length) {
                var t = this[0], n = this.offsetParent(), e = this.offset(), i = L.test(n[0].nodeName) ? {top: 0, left: 0} : n.offset();
                return e.top -= parseFloat(j(t).css("margin-top")) || 0, e.left -= parseFloat(j(t).css("margin-left")) || 0, i.top += parseFloat(j(n[0]).css("border-top-width")) || 0, i.left += parseFloat(j(n[0]).css("border-left-width")) || 0, {top: e.top - i.top, left: e.left - i.left}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || A.body; t && !L.test(t.nodeName) && "static" == j(t).css("position");)t = t.offsetParent;
                return t
            })
        }}, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function (t) {
            j.fn[t] = function (n) {
                var r, o = this[0], a = t.replace(/./, function (t) {
                    return t[0].toUpperCase()
                });
                return n === E ? e(o) ? o["inner" + a] : i(o) ? o.documentElement["offset" + a] : (r = this.offset()) && r[t] : this.each(function (e) {
                    o = j(this), o.css(t, g(this, n, e, o[t]()))
                })
            }
        }), q.forEach(function (n, e) {
            var i = e % 2;
            j.fn[n] = function () {
                var n, r, o = j.map(arguments, function (e) {
                    return n = t(e), "object" == n || "array" == n || null == e ? e : Y.fragment(e)
                }), a = this.length > 1;
                return 1 > o.length ? this : this.each(function (t, n) {
                    r = i ? n : n.parentNode, n = 0 == e ? n.nextSibling : 1 == e ? n.firstChild : 2 == e ? n : null, o.forEach(function (t) {
                        if (a)t = t.cloneNode(!0); else if (!r)return j(t).remove();
                        w(r.insertBefore(t, n), function (t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                        })
                    })
                })
            }, j.fn[i ? n + "To" : "insert" + (e ? "Before" : "After")] = function (t) {
                return j(t)[n](this), this
            }
        }), Y.Z.prototype = j.fn, Y.uniq = C, Y.deserializeValue = x, j.zepto = Y, j
    }();
    window.Zepto = i, "$"in window || (window.$ = i), function (t) {
        function n(t) {
            var n = this.os = {}, e = this.browser = {}, i = t.match(/WebKit\/([\d.]+)/), r = t.match(/(Android)\s+([\d.]+)/), o = t.match(/(iPad).*OS\s([\d_]+)/), a = !o && t.match(/(iPhone\sOS)\s([\d_]+)/), s = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), u = s && t.match(/TouchPad/), c = t.match(/Kindle\/([\d.]+)/), l = t.match(/Silk\/([\d._]+)/), f = t.match(/(BlackBerry).*Version\/([\d.]+)/), h = t.match(/(BB10).*Version\/([\d.]+)/), p = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/), d = t.match(/PlayBook/), m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/), v = t.match(/Firefox\/([\d.]+)/);
            (e.webkit = !!i) && (e.version = i[1]), r && (n.android = !0, n.version = r[2]), a && (n.ios = n.iphone = !0, n.version = a[2].replace(/_/g, ".")), o && (n.ios = n.ipad = !0, n.version = o[2].replace(/_/g, ".")), s && (n.webos = !0, n.version = s[2]), u && (n.touchpad = !0), f && (n.blackberry = !0, n.version = f[2]), h && (n.bb10 = !0, n.version = h[2]), p && (n.rimtabletos = !0, n.version = p[2]), d && (e.playbook = !0), c && (n.kindle = !0, n.version = c[1]), l && (e.silk = !0, e.version = l[1]), !l && n.android && t.match(/Kindle Fire/) && (e.silk = !0), m && (e.chrome = !0, e.version = m[1]), v && (e.firefox = !0, e.version = v[1]), n.tablet = !!(o || d || r && !t.match(/Mobile/) || v && t.match(/Tablet/)), n.phone = !(n.tablet || !(r || a || s || f || h || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || v && t.match(/Mobile/)))
        }

        n.call(t, navigator.userAgent), t.__detect = n
    }(i), function (t) {
        function n(t) {
            return t._zid || (t._zid = p++)
        }

        function e(t, e, o, a) {
            if (e = i(e), e.ns)var s = r(e.ns);
            return(h[n(t)] || []).filter(function (t) {
                return!(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || o && n(t.fn) !== n(o) || a && t.sel != a)
            })
        }

        function i(t) {
            var n = ("" + t).split(".");
            return{e: n[0], ns: n.slice(1).sort().join(" ")}
        }

        function r(t) {
            return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function o(n, e, i) {
            "string" != t.type(n) ? t.each(n, i) : n.split(/\s/).forEach(function (t) {
                i(t, e)
            })
        }

        function a(t, n) {
            return t.del && ("focus" == t.e || "blur" == t.e) || !!n
        }

        function s(t) {
            return m[t] || t
        }

        function u(e, r, u, c, l, f) {
            var p = n(e), d = h[p] || (h[p] = []);
            o(r, u, function (n, r) {
                var o = i(n);
                o.fn = r, o.sel = c, o.e in m && (r = function (n) {
                    var e = n.relatedTarget;
                    return!e || e !== this && !t.contains(this, e) ? o.fn.apply(this, arguments) : void 0
                }), o.del = l && l(r, n);
                var u = o.del || r;
                o.proxy = function (t) {
                    var n = u.apply(e, [t].concat(t.data));
                    return n === !1 && (t.preventDefault(), t.stopPropagation()), n
                }, o.i = d.length, d.push(o), e.addEventListener(s(o.e), o.proxy, a(o, f))
            })
        }

        function c(t, i, r, u, c) {
            var l = n(t);
            o(i || "", r, function (n, i) {
                e(t, n, i, u).forEach(function (n) {
                    delete h[l][n.i], t.removeEventListener(s(n.e), n.proxy, a(n, c))
                })
            })
        }

        function l(n) {
            var e, i = {originalEvent: n};
            for (e in n)y.test(e) || void 0 === n[e] || (i[e] = n[e]);
            return t.each(b, function (t, e) {
                i[t] = function () {
                    return this[e] = v, n[t].apply(n, arguments)
                }, i[e] = g
            }), i
        }

        function f(t) {
            if (!("defaultPrevented"in t)) {
                t.defaultPrevented = !1;
                var n = t.preventDefault;
                t.preventDefault = function () {
                    this.defaultPrevented = !0, n.call(this)
                }
            }
        }

        var h = (t.zepto.qsa, {}), p = 1, d = {}, m = {mouseenter: "mouseover", mouseleave: "mouseout"};
        d.click = d.mousedown = d.mouseup = d.mousemove = "MouseEvents", t.event = {add: u, remove: c}, t.proxy = function (e, i) {
            if (t.isFunction(e)) {
                var r = function () {
                    return e.apply(i, arguments)
                };
                return r._zid = n(e), r
            }
            if ("string" == typeof i)return t.proxy(e[i], e);
            throw new TypeError("expected function")
        }, t.fn.bind = function (t, n) {
            return this.each(function () {
                u(this, t, n)
            })
        }, t.fn.unbind = function (t, n) {
            return this.each(function () {
                c(this, t, n)
            })
        }, t.fn.one = function (t, n) {
            return this.each(function (e, i) {
                u(this, t, n, null, function (t, n) {
                    return function () {
                        var e = t.apply(i, arguments);
                        return c(i, n, t), e
                    }
                })
            })
        };
        var v = function () {
            return!0
        }, g = function () {
            return!1
        }, y = /^([A-Z]|layer[XY]$)/, b = {preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped"};
        t.fn.delegate = function (n, e, i) {
            return this.each(function (r, o) {
                u(o, e, i, n, function (e) {
                    return function (i) {
                        var r, a = t(i.target).closest(n, o).get(0);
                        return a ? (r = t.extend(l(i), {currentTarget: a, liveFired: o}), e.apply(a, [r].concat([].slice.call(arguments, 1)))) : void 0
                    }
                })
            })
        }, t.fn.undelegate = function (t, n, e) {
            return this.each(function () {
                c(this, n, e, t)
            })
        }, t.fn.live = function (n, e) {
            return t(document.body).delegate(this.selector, n, e), this
        }, t.fn.die = function (n, e) {
            return t(document.body).undelegate(this.selector, n, e), this
        }, t.fn.on = function (n, e, i) {
            return!e || t.isFunction(e) ? this.bind(n, e || i) : this.delegate(e, n, i)
        }, t.fn.off = function (n, e, i) {
            return!e || t.isFunction(e) ? this.unbind(n, e || i) : this.undelegate(e, n, i)
        }, t.fn.trigger = function (n, e) {
            return("string" == typeof n || t.isPlainObject(n)) && (n = t.Event(n)), f(n), n.data = e, this.each(function () {
                "dispatchEvent"in this && this.dispatchEvent(n)
            })
        }, t.fn.triggerHandler = function (n, i) {
            var r, o;
            return this.each(function (a, s) {
                r = l("string" == typeof n ? t.Event(n) : n), r.data = i, r.target = s, t.each(e(s, n.type || n), function (t, n) {
                    return o = n.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), o
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (n) {
            t.fn[n] = function (t) {
                return t ? this.bind(n, t) : this.trigger(n)
            }
        }), ["focus", "blur"].forEach(function (n) {
            t.fn[n] = function (t) {
                return t ? this.bind(n, t) : this.each(function () {
                    try {
                        this[n]()
                    } catch (t) {
                    }
                }), this
            }
        }), t.Event = function (t, n) {
            "string" != typeof t && (n = t, t = n.type);
            var e = document.createEvent(d[t] || "Events"), i = !0;
            if (n)for (var r in n)"bubbles" == r ? i = !!n[r] : e[r] = n[r];
            return e.initEvent(t, i, !0, null, null, null, null, null, null, null, null, null, null, null, null), e.isDefaultPrevented = function () {
                return this.defaultPrevented
            }, e
        }
    }(i), function (t) {
        function n(n, e, i) {
            var r = t.Event(e);
            return t(n).trigger(r, i), !r.defaultPrevented
        }

        function e(t, e, i, r) {
            return t.global ? n(e || y, i, r) : void 0
        }

        function i(n) {
            n.global && 0 === t.active++ && e(n, null, "ajaxStart")
        }

        function r(n) {
            n.global && !--t.active && e(n, null, "ajaxStop")
        }

        function o(t, n) {
            var i = n.context;
            return n.beforeSend.call(i, t, n) === !1 || e(n, i, "ajaxBeforeSend", [t, n]) === !1 ? !1 : (e(n, i, "ajaxSend", [t, n]), void 0)
        }

        function a(t, n, i) {
            var r = i.context, o = "success";
            i.success.call(r, t, o, n), e(i, r, "ajaxSuccess", [n, i, t]), u(o, n, i)
        }

        function s(t, n, i, r) {
            var o = r.context;
            r.error.call(o, i, n, t), e(r, o, "ajaxError", [i, r, t]), u(n, i, r)
        }

        function u(t, n, i) {
            var o = i.context;
            i.complete.call(o, n, t), e(i, o, "ajaxComplete", [n, i]), r(i)
        }

        function c() {
        }

        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : x.test(t) ? "script" : w.test(t) && "xml") || "text"
        }

        function f(t, n) {
            return(t + "&" + n).replace(/[&?]{1,2}/, "?")
        }

        function h(n) {
            n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional)), !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = f(n.url, n.data))
        }

        function p(n, e, i, r) {
            var o = !t.isFunction(e);
            return{url: n, data: o ? e : void 0, success: o ? t.isFunction(i) ? i : void 0 : e, dataType: o ? r || i : i}
        }

        function d(n, e, i, r) {
            var o, a = t.isArray(e);
            t.each(e, function (e, s) {
                o = t.type(s), r && (e = i ? r : r + "[" + (a ? "" : e) + "]"), !r && a ? n.add(s.name, s.value) : "array" == o || !i && "object" == o ? d(n, s, i, e) : n.add(e, s)
            })
        }

        var m, v, g = 0, y = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, x = /^(?:text|application)\/javascript/i, w = /^(?:text|application)\/xml/i, E = "application/json", T = "text/html", j = /^\s*$/;
        t.active = 0, t.ajaxJSONP = function (n) {
            if (!("type"in n))return t.ajax(n);
            var e, i = "jsonp" + ++g, r = y.createElement("script"), u = function () {
                clearTimeout(e), t(r).remove(), delete window[i]
            }, l = function (t) {
                u(), t && "timeout" != t || (window[i] = c), s(null, t || "abort", f, n)
            }, f = {abort: l};
            return o(f, n) === !1 ? (l("abort"), !1) : (window[i] = function (t) {
                u(), a(t, f, n)
            }, r.onerror = function () {
                l("error")
            }, r.src = n.url.replace(/=\?/, "=" + i), t("head").append(r), n.timeout > 0 && (e = setTimeout(function () {
                l("timeout")
            }, n.timeout)), f)
        }, t.ajaxSettings = {type: "GET", beforeSend: c, success: c, error: c, complete: c, context: null, global: !0, xhr: function () {
            return new window.XMLHttpRequest
        }, accepts: {script: "text/javascript, application/javascript", json: E, xml: "application/xml, text/xml", html: T, text: "text/plain"}, crossDomain: !1, timeout: 0, processData: !0, cache: !0}, t.ajax = function (n) {
            var e = t.extend({}, n || {});
            for (m in t.ajaxSettings)void 0 === e[m] && (e[m] = t.ajaxSettings[m]);
            i(e), e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host), e.url || (e.url = "" + window.location), h(e), e.cache === !1 && (e.url = f(e.url, "_=" + Date.now()));
            var r = e.dataType, u = /=\?/.test(e.url);
            if ("jsonp" == r || u)return u || (e.url = f(e.url, "callback=?")), t.ajaxJSONP(e);
            var p, d = e.accepts[r], g = {}, y = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, b = e.xhr();
            e.crossDomain || (g["X-Requested-With"] = "XMLHttpRequest"), d && (g.Accept = d, d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), b.overrideMimeType && b.overrideMimeType(d)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && (g["Content-Type"] = e.contentType || "application/x-www-form-urlencoded"), e.headers = t.extend(g, e.headers || {}), b.onreadystatechange = function () {
                if (4 == b.readyState) {
                    b.onreadystatechange = c, clearTimeout(p);
                    var n, i = !1;
                    if (b.status >= 200 && 300 > b.status || 304 == b.status || 0 == b.status && "file:" == y) {
                        r = r || l(b.getResponseHeader("content-type")), n = b.responseText;
                        try {
                            "script" == r ? (1, eval)(n) : "xml" == r ? n = b.responseXML : "json" == r && (n = j.test(n) ? null : t.parseJSON(n))
                        } catch (o) {
                            i = o
                        }
                        i ? s(i, "parsererror", b, e) : a(n, b, e)
                    } else s(null, b.status ? "error" : "abort", b, e)
                }
            };
            var x = "async"in e ? e.async : !0;
            b.open(e.type, e.url, x);
            for (v in e.headers)b.setRequestHeader(v, e.headers[v]);
            return o(b, e) === !1 ? (b.abort(), !1) : (e.timeout > 0 && (p = setTimeout(function () {
                b.onreadystatechange = c, b.abort(), s(null, "timeout", b, e)
            }, e.timeout)), b.send(e.data ? e.data : null), b)
        }, t.get = function () {
            return t.ajax(p.apply(null, arguments))
        }, t.post = function () {
            var n = p.apply(null, arguments);
            return n.type = "POST", t.ajax(n)
        }, t.getJSON = function () {
            var n = p.apply(null, arguments);
            return n.dataType = "json", t.ajax(n)
        }, t.fn.load = function (n, e, i) {
            if (!this.length)return this;
            var r, o = this, a = n.split(/\s/), s = p(n, e, i), u = s.success;
            return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function (n) {
                o.html(r ? t("<div>").html(n.replace(b, "")).find(r) : n), u && u.apply(o, arguments)
            }, t.ajax(s), this
        };
        var S = encodeURIComponent;
        t.param = function (t, n) {
            var e = [];
            return e.add = function (t, n) {
                this.push(S(t) + "=" + S(n))
            }, d(e, t, n), e.join("&").replace(/%20/g, "+")
        }
    }(i), function (t) {
        t.fn.serializeArray = function () {
            var n, e = [];
            return t(Array.prototype.slice.call(this.get(0).elements)).each(function () {
                n = t(this);
                var i = n.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({name: n.attr("name"), value: n.val()})
            }), e
        }, t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (n) {
                t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
            }), t.join("&")
        }, t.fn.submit = function (n) {
            if (n)this.bind("submit", n); else if (this.length) {
                var e = t.Event("submit");
                this.eq(0).trigger(e), e.defaultPrevented || this.get(0).submit()
            }
            return this
        }
    }(i), function (t, n) {
        function e(t) {
            return i(t.replace(/([a-z])([A-Z])/, "$1-$2"))
        }

        function i(t) {
            return t.toLowerCase()
        }

        function r(t) {
            return o ? o + t : i(t)
        }

        var o, a, s, u, c, l, f, h, p = "", d = {Webkit: "webkit", Moz: "", O: "o", ms: "MS"}, m = window.document, v = m.createElement("div"), g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
        t.each(d, function (t, e) {
            return v.style[t + "TransitionProperty"] !== n ? (p = "-" + i(t) + "-", o = e, !1) : n
        }), a = p + "transform", y[s = p + "transition-property"] = y[u = p + "transition-duration"] = y[c = p + "transition-timing-function"] = y[l = p + "animation-name"] = y[f = p + "animation-duration"] = y[h = p + "animation-timing-function"] = "", t.fx = {off: o === n && v.style.transitionProperty === n, speeds: {_default: 400, fast: 200, slow: 600}, cssPrefix: p, transitionEnd: r("TransitionEnd"), animationEnd: r("AnimationEnd")}, t.fn.animate = function (n, e, i, r) {
            return t.isPlainObject(e) && (i = e.easing, r = e.complete, e = e.duration), e && (e = ("number" == typeof e ? e : t.fx.speeds[e] || t.fx.speeds._default) / 1e3), this.anim(n, e, i, r)
        }, t.fn.anim = function (i, r, o, p) {
            var d, m, v, b = {}, x = "", w = this, E = t.fx.transitionEnd;
            if (r === n && (r = .4), t.fx.off && (r = 0), "string" == typeof i)b[l] = i, b[f] = r + "s", b[h] = o || "linear", E = t.fx.animationEnd; else {
                m = [];
                for (d in i)g.test(d) ? x += d + "(" + i[d] + ") " : (b[d] = i[d], m.push(e(d)));
                x && (b[a] = x, m.push(a)), r > 0 && "object" == typeof i && (b[s] = m.join(", "), b[u] = r + "s", b[c] = o || "linear")
            }
            return v = function (e) {
                if (e !== n) {
                    if (e.target !== e.currentTarget)return;
                    t(e.target).unbind(E, v)
                }
                t(this).css(y), p && p.call(this)
            }, r > 0 && this.bind(E, v), this.size() && this.get(0).clientLeft, this.css(b), 0 >= r && setTimeout(function () {
                w.each(function () {
                    v.call(this)
                })
            }, 0), this
        }, v = null
    }(i), (function ($) {
        var touch = {},
            touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
            longTapDelay = 750,
            gesture;

        function swipeDirection(x1, x2, y1, y2) {
            return Math.abs(x1 - x2) >=
                Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
        }

        function longTap() {
            longTapTimeout = null
            if (touch.last) {
                touch.el.trigger('longTap')
                touch = {}
            }
        }

        function cancelLongTap() {
            if (longTapTimeout) clearTimeout(longTapTimeout)
            longTapTimeout = null
        }

        function cancelAll() {
            if (touchTimeout) clearTimeout(touchTimeout)
            if (tapTimeout) clearTimeout(tapTimeout)
            if (swipeTimeout) clearTimeout(swipeTimeout)
            if (longTapTimeout) clearTimeout(longTapTimeout)
            touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
            touch = {}
        }

        function isPrimaryTouch(event) {
            return (event.pointerType == 'touch' ||
                event.pointerType == event.MSPOINTER_TYPE_TOUCH)
                && event.isPrimary
        }

        function isPointerEventType(e, type) {
            return (e.type == 'pointer' + type ||
                e.type.toLowerCase() == 'mspointer' + type)
        }

        var eventHack = {
            endInfo: {},
            mark: function (x, y, el) {
                // 记录上一次touchend事件的相关信息
                this.endInfo = {x: x, y: y, el: el};
                window.setTimeout(function () {
                    eventHack.unmark();
                }, 2000);
            },
            unmark: function () {
                this.endInfo = {};
            },
            onclick: function (event) {
                var c = eventHack.endInfo,
                    x = c.x,
                    y = c.y,
                    el = c.el;
                // 坐标一样，target却不一样
                if (el != event.target && Math.abs(event.pageX - x) < 25 && Math.abs(event.pageY - y) < 25) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        $(document).ready(function () {
            var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

            if ('MSGesture' in window) {
                gesture = new MSGesture()
                gesture.target = document.body
            }
            document.addEventListener('click', eventHack.onclick, true);
            $(document).bind('MSGestureEnd', function (e) {
                var swipeDirectionFromVelocity =
                        e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
                if (swipeDirectionFromVelocity) {
                    touch.el.trigger('swipe')
                    touch.el.trigger('swipe' + swipeDirectionFromVelocity)
                }
            })
                .on('touchstart MSPointerDown pointerdown', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return
                    firstTouch = _isPointerType ? e : e.touches[0]
                    if (e.touches && e.touches.length === 1 && touch.x2) {
                        // Clear out touch movement data if we have it sticking around
                        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
                        touch.x2 = undefined
                        touch.y2 = undefined
                    }
                    now = Date.now()
                    delta = now - (touch.last || now)
                    touch.el = $('tagName' in firstTouch.target ?
                        firstTouch.target : firstTouch.target.parentNode)
                    touchTimeout && clearTimeout(touchTimeout)
                    touch.x1 = firstTouch.pageX
                    touch.y1 = firstTouch.pageY
                    if (delta > 0 && delta <= 250) touch.isDoubleTap = true
                    touch.last = now
                    longTapTimeout = setTimeout(longTap, longTapDelay)
                    // adds the current touch contact for IE gesture recognition
                    if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
                })
                .on('touchmove MSPointerMove pointermove', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return
                    firstTouch = _isPointerType ? e : e.touches[0]
                    cancelLongTap()
                    touch.x2 = firstTouch.pageX
                    touch.y2 = firstTouch.pageY

                    deltaX += Math.abs(touch.x1 - touch.x2)
                    deltaY += Math.abs(touch.y1 - touch.y2)
                })
                .on('touchend MSPointerUp pointerup', function (e) {
                    if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return
                    cancelLongTap()
                    // add hack event, prevent click event trigger
                    touch.el && eventHack.mark(touch.x1, touch.y1, touch.el[0]);

                    // swipe
                    if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
                        (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

                        swipeTimeout = setTimeout(function () {
                            touch.el.trigger('swipe')
                            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
                            touch = {}
                        }, 0)

                    // normal tap
                    else if ('last' in touch)
                    // don't fire tap when delta position changed by more than 30 pixels,
                    // for instance when moving to a point and back to origin
                        if (deltaX < 30 && deltaY < 30) {
                            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                            // ('tap' fires before 'scroll')
                            tapTimeout = setTimeout(function () {

                                // trigger universal 'tap' with the option to cancelTouch()
                                // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                                var event = $.Event('tap')
                                event.cancelTouch = cancelAll
                                touch.el.trigger(event)

                                // trigger double tap immediately
                                if (touch.isDoubleTap) {
                                    if (touch.el) touch.el.trigger('doubleTap')
                                    touch = {}
                                }

                                // trigger single tap after 250ms of inactivity
                                else {
                                    touchTimeout = setTimeout(function () {
                                        touchTimeout = null
                                        if (touch.el) touch.el.trigger('singleTap')
                                        touch = {}
                                    }, 250)
                                }
                            }, 0)
                        } else {
                            touch = {}
                        }
                    deltaX = deltaY = 0

                })
                // when the browser window loses focus,
                // for example when a modal dialog is shown,
                // cancel all ongoing events
                .on('touchcancel MSPointerCancel pointercancel', cancelAll)

            // scrolling the window indicates intention of the user
            // to scroll, not tap or swipe, so cancel all ongoing events
            $(window).on('scroll', cancelAll)
        })

        ;
        ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
            'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
                $.fn[eventName] = function (callback) {
                    return this.on(eventName, callback)
                }
            })
    })(i)
    e.exports = window.Zepto
});/*  |xGv00|04ec6e3e5549721a256ec591af1badaf */