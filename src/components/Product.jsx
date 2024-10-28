import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon, CheckIcon,	ChevronDownIcon} from "@radix-ui/react-icons";
import classnames from "classnames";
import * as Select from "@radix-ui/react-select";
import * as HoverCard from "@radix-ui/react-hover-card";



import "./styles.css";

const Product = () => {
    const SelectItem = React.forwardRef(
        ({ children, className, ...props }, forwardedRef) => {
            return (
                <Select.Item
                    className={classnames("SelectItem", className)}
                    {...props}
                    ref={forwardedRef}
                >
                    <Select.ItemText>{children}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                        <CheckIcon />
                    </Select.ItemIndicator>
                </Select.Item>
            );
        },
    );
    return (
        <div className="product-card">
            <div className="Container">
                    <img className="Image"
                        src="https://m.media-amazon.com/images/I/81lrHgxEvCL._AC_SX679_.jpg"
                        alt="Ice Blue-shortMen's Polo Shirt Quick Dry"
                    />
            </div>
            <div className="product-data">
                <h2 className="product-name">MAGCOMSEN Men's Polo Shirt Quick Dry Performance Short Sleeve Tactical Shirts Pique Jersey Golf Shirt</h2>
                <div className="product-data-content">
                    <div className="content-left">
                        <p className="price">
                            <span className="discount-price">-17%</span>
                            <span className="fractial">$</span>
                            24
                            <span className="fractial">98</span>
                        </p>
                        <p className="light-color-text">List Price: <span className="line-through">$29.99</span></p>
                        <Popover.Root className='popover'>
                            <Popover.Trigger className="PopoverTrigger">Details <ChevronDownIcon className="AccordionChevron" /> </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className="PopoverContent" sideOffset={5}>
                                    <div>
                                        <h3 className="popover-title">Shipping & Fee Details</h3>
                                        <hr/>
                                        <div className="popover-price-line">
                                            <p>Price</p>
                                            <p>$24.98</p>
                                        </div>
                                        <div className="popover-price-line">
                                            <p>Shepping</p>
                                            <p>$12.30</p>
                                        </div>
                                        <div className="popover-price-line">
                                            <p>Tax</p>
                                            <p>$0.00</p>
                                        </div>
                                        <hr />
                                        <div className="popover-price-line">
                                            <p>Total</p>
                                            <p>$37.28</p>
                                        </div>
                                    </div>
                                    <Popover.Close className="PopoverClose" aria-label="Close">
                                        <Cross2Icon />
                                    </Popover.Close>
                                    <Popover.Arrow className="PopoverArrow" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                        <div className="selections" style={{display: 'flex', gap: '20px'}}>
                            <div>
                                <p>Size: </p>
                                <Select.Root>
                                    <Select.Trigger className="SelectTrigger" aria-label="Size">
                                        <Select.Value placeholder="Select" />
                                        <Select.Icon className="SelectIcon">
                                            <ChevronDownIcon />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="SelectContent">
                                            <Select.Viewport className="SelectViewport">
                                                <Select.Group>
                                                    <Select.Label className="SelectLabel">Select size</Select.Label>
                                                    <SelectItem value="apple">Small</SelectItem>
                                                    <SelectItem value="banana">Middle</SelectItem>
                                                    <SelectItem value="blueberry">Large</SelectItem>
                                                    <SelectItem value="grapes">X-Large</SelectItem>
                                                    <SelectItem value="pineapple">XX-Large</SelectItem>
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                            <div>
                                <p>Color:</p>
                                <Select.Root>
                                    <Select.Trigger className="SelectTrigger" aria-label="Color">
                                        <Select.Value placeholder="Select" />
                                        <Select.Icon className="SelectIcon">
                                            <ChevronDownIcon />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="SelectContent">
                                            <Select.Viewport className="SelectViewport">
                                                <Select.Group>
                                                    <Select.Label className="SelectLabel">Select color</Select.Label>
                                                    <SelectItem value="apple">Ice Blue-short</SelectItem>
                                                    <SelectItem value="banana">Light Purple-short</SelectItem>
                                                    <SelectItem value="blueberry">Flourescent Green-short</SelectItem>
                                                    <SelectItem value="grapes">Light Grey</SelectItem>
                                                    <SelectItem value="pineapple">Mint Green-short</SelectItem>
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                        </div>
                        
                        <div className="product-details">
                            <h3>Product details</h3>
                            <div className="details-content">
                                <div className="details-content-column">
                                    <p className="dc-title">Fabric type</p>
                                    <p className="dc-title">Origin</p>
                                    <p className="dc-title">Care instructions</p>
                                    <p className="dc-title">Closure type</p>   
                                </div>
                                <div className="details-content-column">
                                    <p>100% Polyester</p>
                                    <p>Machine Wash</p>
                                    <p>Imported</p>
                                    <p>Button</p>
                                </div>
                            </div>
                        </div>
                        <div className="buy-btns">
                            <HoverCard.Root>
                                <HoverCard.Trigger asChild>
                                    <a
                                        className="ImageTrigger"
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg className="Image normal" xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512"><path fill="#969696" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                        Deliver to Ukraine
                                    </a>
                                </HoverCard.Trigger>
                                <HoverCard.Portal>
                                    <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                                            <div className="Text bold">Choose your location</div>
                                            <div className="Text">
                                                Delivery options and delivery speeds may vary for different locations
                                            </div>
                                        </div>
                                    </HoverCard.Content>
                                </HoverCard.Portal>
                            </HoverCard.Root>
                            <p className="green-text">In Stock</p>
                            <label htmlFor="quantity">Quantity</label>
                            <input className="input-quantity" type="number" id="quantity" defaultValue={1}/>
                            <div className="btns_column">
                                <button className="buy_button">Add to Cart</button>
                                <button className="buy_button" style={{backgroundColor: 'rgb(255, 111, 0)'}}>Buy Now</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="content-right">
                        <h3>About this item</h3>
                        <ul>
                            <li>Material: 100% Polyester, comfy and soft</li>
                            <li>Style: Classic polo shirts with 3-button placket and spread collar</li>
                            <li>Quick Dry: This men's long and short sleeve polo shirt features Sweat-wicking material that pulls moisture away from the body to keep you cool and dry</li>
                            <li>Comfortable: Durable rib-knit cuffs and three-button placket for a custom fit, rib knit cuffs for added comfort</li>
                            <li>Ideal For: Daily wear, work wear, camping, climbing, hiking, mountaineering, travelling, walking, fishing</li>
                        </ul>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
        
    );
};

export default Product;