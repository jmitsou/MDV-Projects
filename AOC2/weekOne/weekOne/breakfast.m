//
//  boy.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "breakfast.h"

@implementation breakfast

@synthesize ordersOfPancakes, priceOfOrder;

//gives value to properties
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setOrdersOfPancakes:5];
        [self setPriceOfOrder:2];
    }
    return self;
    
};

//math to find total
-(void)findTotal
{
    [self setTotal:(ordersOfPancakes * priceOfOrder)];

}

@end
