(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{317:function(v,e,_){"use strict";_.r(e);var a=_(10),r=Object(a.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"netflix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netflix"}},[v._v("#")]),v._v(" Netflix")]),v._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#eureka"}},[v._v("Eureka")]),e("ul",[e("li",[e("a",{attrs:{href:"#集群"}},[v._v("集群")])]),e("li",[e("a",{attrs:{href:"#自我保护机制"}},[v._v("自我保护机制")])])])]),e("li",[e("a",{attrs:{href:"#ribbon"}},[v._v("Ribbon")]),e("ul",[e("li",[e("a",{attrs:{href:"#服务端负载均衡-vs-客户端负载均衡"}},[v._v("服务端负载均衡 VS 客户端负载均衡")])]),e("li",[e("a",{attrs:{href:"#负载均衡实现"}},[v._v("负载均衡实现")])])])]),e("li",[e("a",{attrs:{href:"#openfeign"}},[v._v("OpenFeign")]),e("ul",[e("li",[e("a",{attrs:{href:"#注解"}},[v._v("注解")])])])]),e("li",[e("a",{attrs:{href:"#hystrix"}},[v._v("Hystrix")]),e("ul",[e("li",[e("a",{attrs:{href:"#作用"}},[v._v("作用")])]),e("li",[e("a",{attrs:{href:"#降级"}},[v._v("降级")])]),e("li",[e("a",{attrs:{href:"#熔断"}},[v._v("熔断")])]),e("li",[e("a",{attrs:{href:"#故障监控"}},[v._v("故障监控")])])])]),e("li",[e("a",{attrs:{href:"#gateway"}},[v._v("Gateway")]),e("ul",[e("li",[e("a",{attrs:{href:"#核心概念"}},[v._v("核心概念")])]),e("li",[e("a",{attrs:{href:"#动态路由"}},[v._v("动态路由")])]),e("li",[e("a",{attrs:{href:"#过滤器"}},[v._v("过滤器")])])])]),e("li",[e("a",{attrs:{href:"#config"}},[v._v("Config")]),e("ul",[e("li",[e("a",{attrs:{href:"#配置刷新"}},[v._v("配置刷新")])])])])])]),e("p"),v._v(" "),e("h2",{attrs:{id:"eureka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eureka"}},[v._v("#")]),v._v(" Eureka")]),v._v(" "),e("p",[v._v("服务注册与发现组件")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Eureka Server")]),v._v(": 服务注册中心, 微服务启动时将自己注册到"),e("code",[v._v("Eureka Server")]),v._v(", "),e("code",[v._v("Eureka Server")]),v._v("维护可用服务列表")]),v._v(" "),e("li",[e("code",[v._v("Eureka Client")]),v._v(": 客户端, 即各微服务, 注册后会向"),e("code",[v._v("Eureka Server")]),v._v("发送心跳, 如果没有接收到心跳将从可用服务列表中移除该服务\n"),e("ul",[e("li",[e("code",[v._v("服务提供者")]),v._v(": 提供服务, 将自己的服务注册到"),e("code",[v._v("Eureka Server")])]),v._v(" "),e("li",[e("code",[v._v("服务消费者")]),v._v(": 消费服务, 从"),e("code",[v._v("Eureka Server")]),v._v("获取服务列表")])])])]),v._v(" "),e("h3",{attrs:{id:"集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[v._v("#")]),v._v(" 集群")]),v._v(" "),e("p",[v._v("单个"),e("code",[v._v("Eureka Server")]),v._v("可能无法承担所有的注册任务, 此时需部署"),e("code",[v._v("Eureka Server")]),v._v("集群, 集群内"),e("code",[v._v("Eureka Server")]),v._v("互相注册, 使得一台"),e("code",[v._v("Eureka Server")]),v._v("接收到注册时会转发到集群中, 防止注册中心崩溃问题")]),v._v(" "),e("h3",{attrs:{id:"自我保护机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自我保护机制"}},[v._v("#")]),v._v(" 自我保护机制")]),v._v(" "),e("p",[v._v("默认情况下, "),e("code",[v._v("Eureka Server")]),v._v("一段时间内没有接收到"),e("code",[v._v("Eureka Clinet")]),v._v("的心跳会将其从服务列表移除, 但为了防止因网络故障导致的短暂失去连接, 自我保护机制开启时价将不会移除没有心跳的服务直至关闭自我保护机制")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("自我保护机制的触发")]),v._v(": 当最后一分钟续约数(接收到心跳数总和, "),e("code",[v._v("Renews(last min)")]),v._v(")低于续约阈值(期望收到心跳数的85%, "),e("code",[v._v("Renews threshold")]),v._v(")时触发, 否则终止")])]),v._v(" "),e("h2",{attrs:{id:"ribbon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ribbon"}},[v._v("#")]),v._v(" Ribbon")]),v._v(" "),e("ul",[e("li",[v._v("负载均衡与服务调用组件")]),v._v(" "),e("li",[v._v("基于HTTP和TCP的客户端负载均衡器, 先从"),e("code",[v._v("Eureka Server")]),v._v("获取服务端列表, 然后负载均衡")])]),v._v(" "),e("h3",{attrs:{id:"服务端负载均衡-vs-客户端负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端负载均衡-vs-客户端负载均衡"}},[v._v("#")]),v._v(" 服务端负载均衡 VS 客户端负载均衡")]),v._v(" "),e("ol",[e("li",[v._v("服务端负载均衡需在服务端与客户端之间建立一个独立的负载均衡服务器, 客户端负载均衡以代码形式封装到客户端")]),v._v(" "),e("li",[v._v("客户端负载均衡需要从注册中心获取服务清单")]),v._v(" "),e("li",[v._v("服务端先发送请求后负载均衡, 客户端先负载均衡后发送请求")]),v._v(" "),e("li",[v._v("客户端负载均衡知道具体哪个服务端提供的服务")])]),v._v(" "),e("h3",{attrs:{id:"负载均衡实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡实现"}},[v._v("#")]),v._v(" 负载均衡实现")]),v._v(" "),e("p",[e("code",[v._v("IRule")]),v._v("接口定义负载均衡策略, 有7个默认实现类, 每一个类是一种负载均衡策略")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("RoundRobinRule")]),v._v(": 线性轮询, 默认")]),v._v(" "),e("li",[e("code",[v._v("RandomRule")]),v._v(": 随机选择")]),v._v(" "),e("li",[e("code",[v._v("RetryRule")]),v._v(": 线性轮训的基础上添加失败机制, 在指定时间内获取失败则重试, 超出时间则返回null")]),v._v(" "),e("li",[e("code",[v._v("WeightedResponseTimeRule")]),v._v(": 平均响应时间越短选中概率越大, 统计信息不足时使用"),e("code",[v._v("RoundRobinRule")])]),v._v(" "),e("li",[e("code",[v._v("BestAvailableRule")]),v._v(": 过滤故障服务, 选择并发量最小的服务")]),v._v(" "),e("li",[e("code",[v._v("AvailabilityFilteringRule")]),v._v(": 过滤故障服务, 过滤并发量大于阈值的服务, 剩下服务轮训选择")]),v._v(" "),e("li",[e("code",[v._v("ZoneAvoidanceRule")]),v._v(": 综合判断服务所在区域的性能和服务可用性来选择, 没有区域下雨"),e("code",[v._v("RandomRule")]),v._v("类似")])]),v._v(" "),e("h2",{attrs:{id:"openfeign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openfeign"}},[v._v("#")]),v._v(" OpenFeign")]),v._v(" "),e("ul",[e("li",[v._v("声明式服务调用组件")]),v._v(" "),e("li",[v._v("Feign对Ribbon集成, 通过声明接口并注解进行配置, 不支持Spring MVC注解")]),v._v(" "),e("li",[v._v("OpenFeign对Feign进行封装, 支持Spring MVC注解")])]),v._v(" "),e("h3",{attrs:{id:"注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[v._v("#")]),v._v(" 注解")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("@FeignClient")]),v._v(": 通知OpenFeign组件对"),e("code",[v._v("@RequestMapping")]),v._v("注解下的接口解析, 动态代理生成实现类")]),v._v(" "),e("li",[e("code",[v._v("@EnableFeignClients")]),v._v(": 开启OpenFeign")])]),v._v(" "),e("h2",{attrs:{id:"hystrix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hystrix"}},[v._v("#")]),v._v(" Hystrix")]),v._v(" "),e("p",[v._v("服务熔断与降级组件")]),v._v(" "),e("h3",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[v._v("#")]),v._v(" 作用")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("保护线程资源")]),v._v(": 防止单个服务消耗所有线程资源")]),v._v(" "),e("li",[e("code",[v._v("快速失败机制")]),v._v(": 发生故障的服务返回请求失败")]),v._v(" "),e("li",[e("code",[v._v("降级方案")]),v._v(": 请求失败后使用的降级方案(程序运行异常, 服务超时, 熔断器打开, 线程资源耗尽等时降级)")]),v._v(" "),e("li",[e("code",[v._v("防止故障扩散")]),v._v(": 熔断机制防止扩散到其他服务")]),v._v(" "),e("li",[e("code",[v._v("监控功能")]),v._v(": 故障监控组件")])]),v._v(" "),e("h3",{attrs:{id:"降级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[v._v("#")]),v._v(" 降级")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("服务端降级")]),v._v(": "),e("code",[v._v("@HystrixCommand")]),v._v("注解, 指定降级方法以及降级相关参数, "),e("code",[v._v("@EnableCircuitBreaker")]),v._v("开启")]),v._v(" "),e("li",[e("code",[v._v("客户端降级")]),v._v(": "),e("code",[v._v("@HystrixCommand")]),v._v("注解, "),e("code",[v._v("@EnableHystrix")]),v._v("开启")]),v._v(" "),e("li",[e("code",[v._v("全局降级")]),v._v(": 在Controller类上用"),e("code",[v._v("@DefaultProperties")]),v._v("注解指定全局降级方法(仅对同一个类生效), 之后使用"),e("code",[v._v("@HystrixCommand")]),v._v("无需配置参数")]),v._v(" "),e("li",[e("code",[v._v("解耦降级")]),v._v(": "),e("code",[v._v("@FeignClient")]),v._v("注解添加参数fallback, 指定为"),e("code",[v._v("@FeignClient")]),v._v("注解的接口的一个实现类")])]),v._v(" "),e("h3",{attrs:{id:"熔断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[v._v("#")]),v._v(" 熔断")]),v._v(" "),e("ul",[e("li",[v._v("熔断关闭状态: 服务正常访问")]),v._v(" "),e("li",[v._v("熔断开启状态: 一定时间内出错率达到阈值, 进入熔断开启状态, 对服务的调用均降级, 一段时间后进入半熔断状态")]),v._v(" "),e("li",[v._v("半熔断状态: 熔断器允许部分请求调用服务, 一段时间内, 若成功率达到阈值则进入熔断关闭状态, 否则重新进入熔断开启状态")])]),v._v(" "),e("h3",{attrs:{id:"故障监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障监控"}},[v._v("#")]),v._v(" 故障监控")]),v._v(" "),e("p",[v._v("持续记录所有通过Hystrix发送的请求")]),v._v(" "),e("h2",{attrs:{id:"gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway"}},[v._v("#")]),v._v(" Gateway")]),v._v(" "),e("ul",[e("li",[v._v("API网关组件")]),v._v(" "),e("li",[v._v("客户端与微服务之间的服务")]),v._v(" "),e("li",[v._v("基于WebFlux实现, WebFlux底层采用Netty")])]),v._v(" "),e("h3",{attrs:{id:"核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[v._v("#")]),v._v(" 核心概念")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Route")]),v._v("路由: 基本模块, 由ID, URI, 断言, 过滤器组成")]),v._v(" "),e("li",[e("code",[v._v("Predicate")]),v._v("断言: 路由转发的判断条件, 对HTTP请求进行匹配")]),v._v(" "),e("li",[e("code",[v._v("Filter")]),v._v("过滤器: 对请求拦截和修改, 可做参数校验, 权限校验")])]),v._v(" "),e("h3",{attrs:{id:"动态路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[v._v("#")]),v._v(" 动态路由")]),v._v(" "),e("p",[v._v("以服务名为路径创建动态路由转发"),e("code",[v._v("lb://service-name")]),v._v(", 使用"),e("code",[v._v("lb")]),v._v("协议开启负载均衡, "),e("code",[v._v("service-name")]),v._v("表示服务名")]),v._v(" "),e("h3",{attrs:{id:"过滤器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[v._v("#")]),v._v(" 过滤器")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("GatewayFilter")]),v._v("网关过滤器: 在配置中完成过滤器的描述")]),v._v(" "),e("li",[e("code",[v._v("GlobalFilter")]),v._v("全局过滤器: 自定义全局过滤器")])]),v._v(" "),e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[v._v("#")]),v._v(" Config")]),v._v(" "),e("p",[v._v("分布式配置文件")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Config Server")]),v._v(": 分布式配置中心, 连接配置仓库为客户端提供获取配置信息等")]),v._v(" "),e("li",[e("code",[v._v("Config Client")]),v._v(": 各微服务通过"),e("code",[v._v("Config Server")]),v._v("获取配置")])]),v._v(" "),e("h3",{attrs:{id:"配置刷新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置刷新"}},[v._v("#")]),v._v(" 配置刷新")]),v._v(" "),e("p",[v._v("一般情况下只有重启"),e("code",[v._v("Config Client")]),v._v("才能更新配置")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("手动刷新配置")]),v._v(": 在"),e("code",[v._v("actuator")]),v._v("监控下, 使用"),e("code",[v._v("@RefreshScope")]),v._v("注解到动态更新的配置, 然后调用"),e("code",[v._v("POST /actuator/fresh")]),v._v("刷新配置")]),v._v(" "),e("li",[e("code",[v._v("Config + Bus动态刷新")]),v._v(": "),e("code",[v._v("Spring Cloud Bus")]),v._v("利用消息代理构建一个公共消息主题, 让所有服务在这一主题下消费\n"),e("ol",[e("li",[v._v("配置发生改变, 向"),e("code",[v._v("Config")]),v._v("中一个客户端或一个服务端发送"),e("code",[v._v("fresh")]),v._v("请求(修改请求可以使得定点刷新)")]),v._v(" "),e("li",[v._v("收到更新请求的端将请求转发给"),e("code",[v._v("Bus")])]),v._v(" "),e("li",[e("code",[v._v("Bus")]),v._v("通知所有"),e("code",[v._v("Config Client")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);