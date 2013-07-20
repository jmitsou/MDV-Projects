//
//  childFactory.h
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "menuBase.h"
#import "breakfast.h"
#import "lunch.h"
#import "dinner.h"

@interface Restaurant : NSObject


+(menuBase *) createNewMenu: (int)menuType;

@end
